"use server"

import prisma from "./prisma";
import { s3Client } from "nodejs-s3-typescript";
import { Blog, Project } from "./types";
import { NextResponse } from "next/server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { throws } from "assert";
import Error from "next/error";

const s3Config = {
  bucketName: process.env.AWS_BUCKET_NAME as string,
  region: process.env.AWS_REGION as string,
  accessKeyId: process.env.AWS_ACCESS_ID as string,
  secretAccessKey: process.env.AWS_SECRET_ID as string
}

export type State = {
  errors?: {
    id?: string[];
    title?: string[];
    content?: string[];
    author?: string[];
    published?: string[];
    authorId?: string[];
  };
  message?: string | null;
};
export async function newBlog(formData: FormData) {
  const title = formData.get('title') as string
  const image = formData.get('image') as File
  const content = formData.get('content') as string
  const imageUploaded = await fileUpload(image, "blog")
  const blog: Blog = {
    title,
    content,
    author: "Gowtham",
    listed: true,
    // @ts-ignore
    thumbnailUrl: imageUploaded.key as string,
    createdAt: Date.now()
  }
  try {
    //@ts-ignore
    const data = await prisma.post.create({ data: blog })
    NextResponse.json({ msg: "Data inserted" })
  } catch (error) {
    console.log("PRISMA ERROR\n", error)

  }
}


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
    const data = await prisma.projects.create({ data: project })
    console.log("Done")
  } catch (error) {
    console.log("Error in Data insertion\n", error)
  }
  revalidatePath('/dashboard/projects')
  redirect('/dashboard/blog')
}
