import { Skeleton } from "../ui/skeleton";
import { Card,CardContent } from "../ui/card";

 function BlogCardSkeleton() {
  return (
      <Card className="  hover:border-slate-800 dark:hover:border-slate-100 transition ease-linear duration-100 ">
        <CardContent className="flex  gap-x-4">
          <Skeleton className="aspect-square relative h-52 mr-7 ">
          </Skeleton>
          <div className="flex-grow  mb-5 flex flex-col">
            <div className="flex items-center justify-between">
              <Skeleton className="h-4 w-[300px] lg:text-3xl" />
            </div>
            <Skeleton className="line-clamp-3 mt-10 w-10/12 h-3 mr-5 dark:text-zinc-300"></Skeleton>
            <Skeleton className="line-clamp-3 mt-5 w-10/12 h-3 mr-5 dark:text-zinc-300"></Skeleton>
            <Skeleton className="line-clamp-3 mt-5 w-10/12 h-3 mr-5 dark:text-zinc-300"></Skeleton>
            <Skeleton className="line-clamp-3 mt-10 w-5/12 h-4 mr-5 dark:text-zinc-300"></Skeleton>
          </div>
        </CardContent>
      </Card>
 
  )
}



export default function BlogSkeleton(){
  return(
  <>

      <Skeleton className="h-6 w-20 mt-10"></Skeleton>
      <Skeleton className=" h-6 w-80 mt-5"></Skeleton>
      <div className="my-10 grid grid-cols-1 2xl:grid-cols-2 gap-6">
        <BlogCardSkeleton />
        <BlogCardSkeleton />
        <BlogCardSkeleton />
        <BlogCardSkeleton />
        <BlogCardSkeleton />

      </div>
    </>
  )
}
