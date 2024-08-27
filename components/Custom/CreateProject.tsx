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



export default function CreateProject() {

  return (
    <div className="btn text-slate-50 bg-blue-500 py-3 px-5 rounded-md ">
      <Dialog>
        <DialogTrigger>Add new Projects</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>New Project </DialogTitle>
            <DialogDescription>
              You are going to add a new Projects
            </DialogDescription>
          </DialogHeader>
          <form action="">
            <div className="form flex flex-col gap-3">
              <label htmlFor="Title">Title</label>
              <Input type="text" placeholder="Some Title" required/>
              <label htmlFor="imageUrl">Image Link</label>
              <Input
                type="text"
                placeholder="https://drive.google.com/random"
                required
              />
              <label htmlFor="Framework">Framework</label>
              <PopOverCustom />
              <label htmlFor="Description">Description</label>
              <Textarea placeholder="Try to write some description"/>
              <Button>Finish...</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
