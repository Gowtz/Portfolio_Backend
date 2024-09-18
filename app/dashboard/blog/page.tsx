import BlogSkeleton from "@/components/Custom/BlogCardSkeleton";
import BlogHeader from "@/components/Custom/BlogHeader";
import Blogs from "@/components/Custom/Blogs";
import { Suspense } from "react";

export default function page() {
  return (
    <>
      <BlogHeader />
      <Suspense fallback={<BlogSkeleton />}>
      <Blogs />
      </Suspense>
    </>
  );
}
