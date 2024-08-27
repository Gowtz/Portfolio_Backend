import Link from "next/link"
export default function page() {
  return (
    <>
      <section className="w-full flex px-20 py-7 justify-between items-center">
        <h1 className="text-5xl">Hi! Gowtham you have 0 projects</h1>
        <Link href={"/dashboard/projects/create"}><div className="btn bg-blue-500 py-3 px-5 rounded-md "> Add new Projects</div></Link>

      </section>
    </>

  )
}

