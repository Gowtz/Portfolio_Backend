"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Input } from "@/components/ui/input";
import React, { useEffect, useState }  from "react";
import { Textarea } from "../ui/textarea";
import { createProject } from "@/lib/action";
import { SelectDropdown } from "./SelectCustom";
import { useFormState } from "react-dom";
const category = [
  {
    value: "frontend",
    label: "Frontend",
  },
  {
    value: "backend",
    label: "Backend",
  },
  {
    value: "fullstack",
    label: "Fullstack",
  },
];
const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
  {
    value: "react",
    label: "React",
  },
];

export default function CreateProject() {
  const [open, setOpen] = useState<boolean>(false);
 const handleSubmit = () =>{
    setOpen(false)
  } 
  return (
    <div className="btn text-zinc-900 bg-white py-2 px-5 rounded-md hover:bg-slate-100 ">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger>Add new Projects</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>New Project </DialogTitle>
            <DialogDescription>
              You are going to add a new Projects
            </DialogDescription>
          </DialogHeader>
          <form action={createProject} onSubmit={handleSubmit} >
            <div className="form flex flex-col gap-3">
              <label htmlFor="Title">Title</label>
              <Input
                type="text"
                name="title"
                placeholder="Some Title"
                required
              />
              <label htmlFor="projectUrl">Project Link</label>
              <Input
                type="text"
                name="projectUrl"
                placeholder="Deployed URL here"
                required
              />
              <label htmlFor="githubUrl">Github Link</label>
              <Input
                type="text"
                name="githubUrl"
                placeholder="Github URL here"
                required
              />
              <label htmlFor="imageUrl">Image Link</label>
              <Input type="file" name="image" required />

              <label htmlFor="category">Category</label>
              <SelectDropdown list={category} name="Category" />
              <label htmlFor="Framework">Framework</label>
              <SelectDropdown list={frameworks} name="Framework" />
              <label htmlFor="Description">Description</label>
              <Textarea
                name="desc"
                placeholder="Try to write some description"
              />
              <Button type="submit">Finish...</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
