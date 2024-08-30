"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toggleActive } from "@/lib/action";
import { DotsVerticalIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useState } from "react";
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
          <DropdownMenuItem>Delete</DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              toggleActive(id, active);
            }}
          >
            {active ? "Remove from active" : "Mark as active"}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
