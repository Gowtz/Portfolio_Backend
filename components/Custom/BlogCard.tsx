import { Blog } from "@/lib/types";
import React from "react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { Badge } from "../ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DotsVerticalIcon } from "@radix-ui/react-icons";

export default function BlogCard({ blog }: { blog: Blog }) {
  return (
    <>
      <Card className="  hover:border-slate-800 dark:hover:border-slate-100 transition ease-linear duration-100">
        <CardContent className="flex gap-x-4">
          <Image
            src={blog.thumbnailUrl}
            height={300}
            width={350}
            alt="Blog Image"
            className="rounded-md"
          />
          <div className="flex-grow flex flex-col">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl">{blog.title}</h1>
              <BlogCardOption listed={blog.listed} />
            </div>
            <p className="line-clamp-3 dark:text-zinc-300">
                {blog.content}
            </p>
            <div className="py-2">

            {blog.listed && <Badge>Published</Badge>}
            {!blog.listed && <Badge className="bg-zinc-600 text-slate-50">Unlisted</Badge>}

            </div>
            <div className="mt-auto flex justify-between dark:text-zinc-400">
                Create at : {blog.createdAt}
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}

function BlogCardOption({listed}:{listed:boolean}) {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <DotsVerticalIcon />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Edit</DropdownMenuItem>
          <DropdownMenuItem>Delete</DropdownMenuItem>

          {listed ? (
            <DropdownMenuItem>Unlist</DropdownMenuItem>
          ) : (
            <DropdownMenuItem>publish</DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
