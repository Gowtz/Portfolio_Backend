"use client";
import Link from "next/link";
import { ModeToggle } from "../themeChanger";
import Navlinks from "./Navlinks";
import { logout } from "@/lib/action";
import { useFormState } from "react-dom";
export default function Sidenav() {
  const [errorMessage, formAction, isPending] = useFormState(logout, undefined);
  return (
    <>
      <nav className="flex flex-col bg-slate-100 dark:bg-zinc-900 h-screen p-5  text-slate-800 dark:text-slate-100 ">
        {/* logo */}
        <Link href={"/dashboard"}>
          <div className="logo text-4xl font-bold  text-center">Gowtz</div>
        </Link>
        <div className="toggler mb-5 mt-10">
          <ModeToggle />
        </div>
        {/* links */}
        <ul className="flex flex-col gap-3  ">
          <Navlinks />
        </ul>

        {/* Signout Btn */}
        <div className="mt-auto">
          <form action={formAction}>
            <button className="w-full">
              <div className="bg-slate-600 dark:bg-slate-50 dark:text-slate-900 rounded-md px-5 py-3 text-center text-slate-50 mt-auto cursor-pointer">
                Signout
              </div>
            </button>
          </form>
        </div>
      </nav>
    </>
  );
}
