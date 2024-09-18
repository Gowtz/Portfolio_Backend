import React from 'react'
import { Skeleton } from '../ui/skeleton'
import { Card,CardContent } from '../ui/card'
export default function ProjectSkeleton() {
  return (
    <>
      <Skeleton className="mt-5 h-5 w-80">
      </Skeleton>
      <section className="mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          <ProjectCardSkeleton />
          <ProjectCardSkeleton />
          <ProjectCardSkeleton />
          <ProjectCardSkeleton />
          <ProjectCardSkeleton />
          <ProjectCardSkeleton />
          <ProjectCardSkeleton />
          <ProjectCardSkeleton />
          <ProjectCardSkeleton />
        </div>
      </section>
  </>
  )
}

function ProjectCardSkeleton(){
  return(
  <>

    <Card className="  hover:border-slate-800 dark:hover:border-slate-100 transition ease-linear duration-100" draggable>
      <CardContent className=" pt-6 flex flex-col gap-5 ">
        <div className="flex items-center justify-between gap-5">
          <Skeleton className="text-2xl h-7 w-10/12"></Skeleton>
        </div>
        <Skeleton className="img relative w-full h-full  aspect-video">
        </Skeleton>
        <div>
          <Skeleton className="h-4 my-2 w-full"></Skeleton>
          <Skeleton className="h-4 my-2 w-full"></Skeleton>
          <Skeleton className="h-4 my-2 w-10/12"></Skeleton>
          <Skeleton className="h-4 my-2 w-9/12"></Skeleton>
            <div className="flex gap-2 mt-5">

            <Skeleton className='h-5 w-20 rounded-full' />
            <Skeleton className='h-5 w-20 rounded-full' />
            <Skeleton className='h-5 w-20 rounded-full' />
            </div>
        </div>
      </CardContent>
    </Card>
    </>
  )
}
