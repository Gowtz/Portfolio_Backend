// import { blogs } from "@/sample/BlogsSample";

import { getAllBlog } from "@/lib/action";
import BlogCard from "./BlogCard";
import { Blog } from "@/lib/types";
export default async function Blogs() {
  //@ts-ignore
  const blogs: Blog[] = await getAllBlog()
  return (
    <>
      <h2 className="text-xl mt-10">Total {blogs?.length}</h2>
      <h2 className="text-xl ">Published: {blogs?.filter(bl => bl.published).length} and {blogs?.filter(bl => !bl.published).length} unlisted</h2>
      <div className="my-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {blogs?.map((ele) => (<BlogCard key={ele?.id} blog={ele} />
        ))}
      </div>
    </>
  );
}
