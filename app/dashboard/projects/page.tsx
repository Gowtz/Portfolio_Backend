import CreateProject from "@/components/Custom/CreateProject";
import Project from "@/components/Custom/Project";
import ProjectSkeleton from "@/components/Custom/ProjectSkeleton";
import { Suspense } from "react";

export default function page() {
  return (
    <>
      <section className="w-full flex py-7 justify-between items-center">
        <h1 className="text-3xl ">
          <span className="text-5xl pr-7">
            {" "}
            Hi!{" "}
            <span className="bg-slate-700 dark:bg-slate-200 text-slate-50 dark:text-slate-700 px-3 rounded-md">
              Gowtham
            </span>
          </span>
        </h1>
        <CreateProject />
      </section>
      <hr />
      <Suspense fallback={<ProjectSkeleton />}>
        <Project />
      </Suspense>
    </>
  );
}
