import { Button } from "../ui/button";
import Link from "next/link";
export default function BlogHeader() {
  return (
  <>
  <header className="flex items-center justify-between">
    <h1 className="text-2xl">Hello there want how you doin... </h1>
    <Link href="/dashboard/blog/create"><Button>Create new Blog</Button></Link>
  </header>
  </>
  )
}
