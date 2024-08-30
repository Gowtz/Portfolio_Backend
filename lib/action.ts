"use server"

import prisma from "./prisma";
import { s3Client } from "nodejs-s3-typescript";
import { Blog, Project } from "./types";
import { NextResponse } from "next/server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

const s3Config = {
  bucketName: process.env.AWS_BUCKET_NAME as string,
  region: process.env.AWS_REGION as string,
  accessKeyId: process.env.AWS_ACCESS_ID as string,
  secretAccessKey: process.env.AWS_SECRET_ID as string
}
// Desc: generic ImageUpload function
const fileUpload = async (image: File, dir: string) => {
  try {
    const buffer = Buffer.from(await image.arrayBuffer());
    const s3 = new s3Client(
      {
        ...s3Config,
        dirName: dir,
      }
    )
    const filename = await s3.uploadFile(buffer)
    return filename
  } catch (error) {
    console.log("Error while uploading file:\n", error)
  }
}

// -----------------------BLOG--------------------

// [BLOG] Desc: Create a new blog
export async function newBlog(formData: FormData) {
  const title = formData.get('title') as string
  const image = formData.get('image') as File
  const content = formData.get('content') as string
  try {
    const imageUploaded = await fileUpload(image, "blog")
    const blog: Blog = {
      title,
      content,
      author: "Gowtham",
      // @ts-ignore
      thumbnailUrl: imageUploaded.key as string,
      createdAt: Date.now()
    }
        // @ts-ignore

    const data = await prisma.post.create({ data: blog })
    NextResponse.json({ msg: "Data inserted" })
  } catch (error) {
    console.log("PRISMA ERROR\n", error)
  }
}

// [Blog] Desc: get Blogs
export async function getAllBlog() {
  try {
    const data = await prisma.post.findMany({ take: 5 })
    return data
  } catch (error) {
    console.log(error)
  }
}

// ---------------PROJECTS------------------

// [Projects] Desc:  Create a new projects
export async function projectForm(formData: FormData) {
  const title = formData.get('title') as string
  const image = formData.get('image') as File
  const framework = formData.get('Framework') as string
  const category = formData.get('Category') as string
  const desc = formData.get('desc') as string
  const projectUrl = formData.get('projectUrl') as string
  try {
    const img = await fileUpload(image, 'project')
    const project: Project = {
      title,
      //@ts-ignore
      thumbnailURL: img.key as string,
      projectUrl,
      category,
      framework,
      desc,
      active: false
    }
    // @ts-ignore
    const data = await prisma.projects.create({ data: project })
    console.log("Done")
  } catch (error) {
    console.log("Error in Data insertion\n", error)
  }
  revalidatePath('/dashboard/projects')
  redirect('/dashboard/blog')
}


// [Projects] Desc:  get all projects
export async function getProjects() {
  try {
    const data = await prisma.projects.findMany()
    return data
  } catch (error) {
    console.log(error)
  }
}

//[Projects] Desc: Edit Project
// Todo: Uncomment later this cause error in production vercel
// export async function editProject(id: string, formData: FormData) {
//   const title = formData.get('title') as string
//   const framework = formData.get('Framework') as string
//   const category = formData.get('Category') as string
//   const desc = formData.get('desc') as string
//   const projectUrl = formData.get('projectUrl') as string
//   try {
//     const data = await prisma.projects.update({
//       where: { id: id },
//       data: {
//         title,
//         category,
//         desc,
//         framework,
//         projectUrl
//       }
//     })
//   } catch (error) {
//     console.log(error)
//   }
// }

// [Projects] Desc:  toggleActive
export async function toggleActive(id: string, active: boolean) {
  try {
    const data = await prisma.projects.update({
      where: {
        id: id
      }, data: {
        active: !active
      }
    })
  } catch (error) {
    console.log(error)
  }
}

