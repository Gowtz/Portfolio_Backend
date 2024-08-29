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
import * as React from "react";
import PopOverCustom from "./PopOverCustom";
import { Textarea } from "../ui/textarea";
import { projectForm } from "@/lib/action";
import { SelectDropdown } from "./SelectCustom";


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
  let putfunction
  // const handlePopoverValue = (name: string, value: string) => {
  //   putfunction = projectForm.bind(null, { [name]: value })
  //   console.log(putfunction)
  //
  // }

  return (
    <div className="btn text-zinc-900 bg-white py-2 px-5 rounded-md hover:bg-slate-100 ">
      <Dialog>
        <DialogTrigger>Add new Projects</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>New Project </DialogTitle>
            <DialogDescription>
              You are going to add a new Projects
            </DialogDescription>
          </DialogHeader>
          <form action={projectForm}>
            <div className="form flex flex-col gap-3">
              <label htmlFor="Title">Title</label>
              <Input type="text" name="title" placeholder="Some Title" required />
              <label htmlFor="projectUrl">Project Link</label>
              <Input type="text" name="projectUrl" placeholder="URL here" required />
              <label htmlFor="imageUrl">Image Link</label>
              <Input
                type="file"
                name="image"
                required
              />

              <label htmlFor="category">Framework</label>
              <SelectDropdown list={category} name='Category' />
              <label htmlFor="Framework">Framework</label>
              <SelectDropdown list={frameworks} name="Framework" />
              <label htmlFor="Description">Description</label>
              <Textarea name="desc" placeholder="Try to write some description" />
              <Button type="submit" >Finish...</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
