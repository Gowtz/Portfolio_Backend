import { Project } from "@/lib/types";

import React from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge"

import Image from "next/image";
import ProjectOption from "./ProjectOption";

export default function ProjectCard({ project }: { project: Project }) {
  return (

    <Card className="  hover:border-slate-800 dark:hover:border-slate-100 transition ease-linear duration-100">
      <CardContent className="pt-6 flex flex-col gap-5 ">
        <div className="flex items-center justify-between gap-5">
          <h1 className="text-3xl">{project.title}</h1>
          <ProjectOption active={project.active}/>
        </div>
        <Image
          src={project.thumbnailURL}
          alt="Project image"
          height={500}
          width={700}
          className="rounded-md border border-slate-800  -px-5 "
        ></Image>
        <div>
          <p className="mb-5">{project.desc}</p>
          <Badge>{project.framework}</Badge>
          {project.active && <Badge className="ml-3 bg-green-400">Active</Badge>}
        </div>
      </CardContent>
    </Card>

  );
}