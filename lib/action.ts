"use server";

import prisma from "./prisma";
import { s3Client } from "nodejs-s3-typescript";
import { Blog, Project } from "./types";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { AuthError } from "next-auth";
import { signIn } from "@/auth";

const s3Config = {
  bucketName: process.env.AWS_BUCKET_NAME as string,
  region: process.env.AWS_REGION as string,
  accessKeyId: process.env.AWS_ACCESS_ID as string,
  secretAccessKey: process.env.AWS_SECRET_ID as string,
};
// ImageUpload function
const fileUpload = async (image: File, dir: string) => {
  try {
    const buffer = Buffer.from(await image.arrayBuffer());
    const s3 = new s3Client({
      ...s3Config,
      dirName: dir,
    });
    const filename = await s3.uploadFile(buffer);
    return filename;
  } catch (error) {
    console.log("Error while uploading file:\n", error);
  }
};

export async function newBlog(formData: FormData) {
  const title = formData.get("title") as string;
  const image = formData.get("image") as File;
  const content = formData.get("content") as string;

  try {
    const imageUploaded = await fileUpload(image, "blog");
    if (!imageUploaded) {
      throw new Error("error while uploading image");
    }
    const blog: Blog = {
      title,
      content,
      author: "Gowtham",
      thumbnailUrl: imageUploaded.key,
      createdAt: Date.now(),
    };
    // @ts-ignore
    const data = await prisma.post.create({ data: blog });
    revalidatePath("/dashboard/blog");
    // return { status: "sucess" };
  } catch (error) {
    console.log("PRISMA ERROR\n", error);
  }
  redirect("/dashboard/blog");
}

export async function getAllBlog() {
  try {
    const data = await prisma.post.findMany({ take: 10 });
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteBlog(id: string) {
  try {
    const data = await prisma.post.delete({
      where: {
        id: id,
      },
    });
  } catch (err) {
    console.log("ERROR WHILE deleting project", err);
  }
  revalidatePath("/dashboard/blog");
}

//   Create a new projects
export async function createProject(formData: FormData) {
  const title = formData.get("title") as string;
  const image = formData.get("image") as File;
  const framework = formData.get("Framework") as string;
  const category = formData.get("Category") as string;
  const gitHubUrl = formData.get("githubUrl") as string;
  const desc = formData.get("desc") as string;
  const projectUrl = formData.get("projectUrl") as string;
  try {
    const img = await fileUpload(image, "project");
    if (!img) {
      throw new Error("Error while uploading image");
    }
    const project: Project = {
      title,
      thumbnailURL: img.key,
      projectUrl,
      gitHubUrl,
      category,
      framework,
      desc,
      active: false,
    };
    //@ts-ignore
    const data = await prisma.projects.create({ data: project });
    revalidatePath("/dashboard/projects");
    return { status: "sucess" };
  } catch (error) {
    console.log("Error in Data insertion\n", error);
  }
  revalidatePath("/dashboard/projects");
}

export async function getProjects() {
  try {
    const data = await prisma.projects.findMany();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function togglePostPublished(id: string, published: Boolean) {
  try {
    const data = await prisma.post.update({
      where: {
        id: id,
      },
      data: {
        published: !published,
      },
    });
    revalidatePath("/dashboard/projects");
  } catch (error) {
    console.log(error);
  }
}
export async function toggleActiveProject(id: string, active: Boolean) {
  try {
    const data = await prisma.projects.update({
      where: {
        id: id,
      },
      data: {
        active: !active,
      },
    });
    revalidatePath("/dashboard/projects");
  } catch (error) {
    console.log(error);
  }
}
export async function deleteProjectById(id: string) {
  try {
    const deleted = await prisma.projects.delete({
      where: {
        id: id,
      },
    });
    revalidatePath("/dashboard/projects");
    return "deleted";
  } catch (error) {}
}

export async function createContribution(data: FormData) {
  const issue = data.get("issue") as string;
  const status = data.get("status") as string;
  const description = data.get("description") as string;
  const codebase = data.get("codebase") as string;

  try {
    const data = await prisma.contribution.create({
      data: {
        issue,
        status,
        description,
        codebase,
      },
    });

    return { status: "sucess" };
  } catch (err) {
    console.log(
      "Error while uploading the the contribution data =================>\n",
      err,
    );

    return { status: "failed" };
  }
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}
