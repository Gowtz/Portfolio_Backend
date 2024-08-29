"use server"

import prisma from "./prisma";
import { s3Client } from "nodejs-s3-typescript";
import { Blog } from "./types";
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
  const imageUploaded = await fileUpload(image)
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
    console.log(data)
  } catch (error) {
    console.log("PRISMA ERROR\n", error)

  }
}


const fileUpload = async (image: File) => {
  try {
    const buffer = Buffer.from(await image.arrayBuffer());
    const s3 = new s3Client(
      {
        ...s3Config,
        dirName: "blog",
      }
    )
    const filename = await s3.uploadFile(buffer)
    return filename
  } catch (error) {
    console.log("Error while uploading file:\n", error)

  }
}
