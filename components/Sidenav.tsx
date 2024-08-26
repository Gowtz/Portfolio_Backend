import Link from "next/link";
import { ModeToggle } from "./themeChanger";
export default function Sidenav() {
  return (
    <>
      <nav className="flex flex-col bg-slate-100 dark:bg-slate-900 h-screen p-5  text-slate-800 dark:text-slate-100 ">
        {/* logo */}
        <Link href={"/dashboard"}>
          <div className="logo text-4xl font-bold mb-8 text-center">Gowtz</div>
        </Link>
        <div className="toggler mb-5">
          <ModeToggle />
        </div>
        {/* links */}
        <ul className="flex flex-col gap-3  ">
          <Link href={"/dashboard"}>
            <li className="hover:bg-slate-200 hover:text-slate-800 rounded-md px-3 py-2 transition ease-in duration-100">
              Dashboard
            </li>
          </Link>
          <Link href={"/blog"}>
            <li className="hover:bg-slate-200 hover:text-slate-800 rounded-md px-3 py-2 transition ease-in duration-100">
              Blog
            </li>
          </Link>
          <Link href={"/socialmedia"}>
            <li className="hover:bg-slate-200 hover:text-slate-800 rounded-md px-3 py-2 transition ease-in duration-100">
              Social Media
            </li>
          </Link>
          <Link href={"/personalwork"}>
            <li className="hover:bg-slate-200 hover:text-slate-800 rounded-md px-3 py-2 transition ease-in duration-100">
              Personal work
            </li>
          </Link>
          <Link href={"/projects"}>
            <li className="hover:bg-slate-200 hover:text-slate-800 rounded-md px-3 py-2 transition ease-in duration-100">
              Projects
            </li>
          </Link>
        </ul>

        {/* Signout Btn */}
        <div className="bg-slate-600 dark:bg-slate-50 dark:text-slate-900 rounded-md px-5 py-3 text-center text-slate-50 mt-auto cursor-pointer">
          Signout
        </div>
      </nav>
    </>
  );
}
