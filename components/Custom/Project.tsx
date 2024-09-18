import React from 'react'

import { getProjects } from "@/lib/action";
import ProjectsCard from "@/components/Custom/ProjectsCard";
export default  async function Project() {
  const projects = await getProjects();
  return (
    <>
      <h3 className="mt-5">
        you have {projects?.length} projects and{" "}
        {projects?.filter((ele) => ele.active).length}{" "}
        <span className="text-green-500">active</span>
      </h3>
      <section className="mt-10">
        <div className="grid grid-cols-1  lg:grid-cols-3 2xl:grid-cols-4 gap-5 mx-auto">
          {/* @ts-ignore */}
          {projects?.map((project) => (
            //@ts-ignore
            <ProjectsCard key={project.id} project={project} />
          ))}
        </div>
      </section>
      </>
  )
}

