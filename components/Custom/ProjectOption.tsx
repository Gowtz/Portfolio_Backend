"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toggleActiveProject } from "@/lib/action";
import { deleteProjectById } from "@/lib/action";
import { DotsVerticalIcon } from "@radix-ui/react-icons";
import Link from "next/link";
export default function ProjectOption({
  id,
  active,
  link,
}: {
  id: string;
  active: Boolean;
  link: string;
}) {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <DotsVerticalIcon />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <Link href={`https://${link}`} target="_blank">
            <DropdownMenuItem>Open Project</DropdownMenuItem>
          </Link>
          <DropdownMenuItem>Edit</DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              deleteProjectById(id);
            }}
          >
            Delete
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              toggleActiveProject(id, active);
            }}
          >
            {active ? "Remove from active" : "Mark as active"}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
