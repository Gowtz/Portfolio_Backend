import { Blog, imageURL } from "@/lib/types";
import React from "react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { Badge } from "../ui/badge";
import BlogCardOption from "./BlogCardOptions";
import {formatDate } from "@/lib/utils";
export default function BlogCard({ blog }: { blog: Blog }) {
  return (
    <>
      <Card className="  hover:border-slate-800 dark:hover:border-slate-100 transition ease-linear duration-100 ">
        <CardContent className="flex  gap-x-4">
          <div className="aspect-square relative h-52 mr-7 ">
            <Image
              src={`${imageURL}/${blog.thumbnailUrl}`}
              // height={300}
              // width={350}
              fill
              alt="Blog Image"
              className="rounded-md"
            />
          </div>
          <div className="flex-grow flex flex-col">
            <div className="flex items-center justify-between">
              <h1 className=" lg:text-3xl">{blog.title}</h1>
              {/* @ts-ignore */}
              <BlogCardOption published={blog.published} bid={blog.id} />
            </div>
            <p className="line-clamp-3  mr-5 dark:text-zinc-300">{blog.content}</p>
            <div className="py-2">
              {blog.published && <Badge>Published</Badge>}
              {!blog.published && (
                <Badge className="bg-zinc-600 text-slate-50">Unlisted</Badge>
              )}
            </div>
            <div className="mt-auto text-sm flex justify-between dark:text-zinc-400">
              Create at : {formatDate(blog.createdAt)}
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}

