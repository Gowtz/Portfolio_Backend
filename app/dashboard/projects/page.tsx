import CreateProject from "@/components/Custom/CreateProject";
import Project from "@/components/Custom/ProjectsCard";
import projects from "@/sample/projects";

export default function page() {
  return (
    <>
      <section className="w-full flex py-7 justify-between items-center">
        <h1 className="text-3xl"><span className="text-5xl pr-7"> Hi! <span className="bg-slate-700 dark:bg-slate-200 text-slate-50 dark:text-slate-700 px-3 rounded-md">Gowtham</span></span>you have {projects.length} projects</h1>
        <CreateProject />
      </section>
      <hr />
      <section className="mt-10">
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {projects.map((project, index) => <Project key={index} project={project} />)}
        </div>

      </section>
    </>
  );
}
