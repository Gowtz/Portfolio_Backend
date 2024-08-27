"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

let links = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Blogs", href: "/dashboard/blog" },
  { name: "Projects", href: "/dashboard/projects" },
  { name: "Personal work", href: "/dashboard/personalwork" },
  { name: "Social media", href: "/dashboard/socialmedia" },
];

export default function Navlinks() {
    let pathname = usePathname()
  return (
    <>
      {links.map((link) => (
        <Link key={link.name} href={link.href}>
          <li className={cn("hover:bg-slate-300 hover:text-slate-900 rounded-md px-3 py-2 transition ease-in duration-100",{
            'bg-slate-200 text-slate-900': pathname === link.href
          })}>
            {link.name}
          </li>
        </Link>
      ))}
    </>
  );
}
