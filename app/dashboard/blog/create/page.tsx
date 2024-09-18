'use client'
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { newBlog } from "@/lib/action";
import { Badge } from "@/components/ui/badge";

export default function page() {
  return (
    <>
      <form action={newBlog}>
        <h1 className="mb-5 text-3xl">Create a new blog</h1>
        <hr className="my-5" />
        <label htmlFor="Title">Title</label>
        <Input
          type="text"
          name="title"
          placeholder="first blog"
          className="mt-3 mb-5"
        ></Input>
        <label htmlFor="image">Image</label> <div className="text-sm mt-2"> Supported format   <Badge className="cursor-pointer mx-2">JPG</Badge><Badge className="cursor-pointer mx-2">JPEG</Badge><Badge className="cursor-pointer mx-2">PNG</Badge></div>
        <Input type="file" name="image" className="mt-3 mb-5" />
        <label htmlFor="content">Content</label>
        <br />
        <textarea
          name="content"
          id="content"
          className="mt-3 mb-5 w-full border border-zinc-500 rounded h-96 p-3"
        />
        <div className="submit">
      <Button>Publish</Button>
        </div>
      </form>
    </>
  );
}
