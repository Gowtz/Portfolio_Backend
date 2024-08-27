import { blogs } from "@/sample/BlogsSample";
import BlogCard from "./BlogCard";
export default function Blogs() {
  return (
    <>
            <h2 className="text-xl mt-10">Total {blogs.length}</h2>
            <h2 className="text-xl ">Published: {blogs.filter(bl => bl.listed).length} and {blogs.filter(bl => !bl.listed).length} unlisted</h2>
      <div className="my-10 grid grid-cols-2 gap-6">

        {blogs.map((ele, index) => (
          <BlogCard key={index} blog={ele} />
        ))}
      </div>
    </>
  );
}
