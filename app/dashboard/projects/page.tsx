import CreateProject from "@/components/Custom/CreateProject";
import ProjectsCard from "@/components/Custom/ProjectsCard";
import { getProjects } from "@/lib/action";
import { Project } from "@/lib/types";

export default async function page() {
  const projects = await getProjects()
  // console.log(projects);
  
  return (
    <>
      <section className="w-full flex py-7 justify-between items-center">
        <h1 className="text-3xl"><span className="text-5xl pr-7"> Hi! <span className="bg-slate-700 dark:bg-slate-200 text-slate-50 dark:text-slate-700 px-3 rounded-md">Gowtham</span></span>you have {projects?.length} projects and {projects?.filter(ele => ele.active).length} active</h1>
        <CreateProject />
      </section>
      <hr />
      <section className="mt-10">
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {/* @ts-ignore */}
          {projects?.map((project) => <ProjectsCard key={project.id} project={project} />)}
        </div>

      </section>
    </>
  );
}
