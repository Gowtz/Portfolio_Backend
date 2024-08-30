'use client'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { toggleActive } from "@/lib/action"
import { DotsVerticalIcon } from "@radix-ui/react-icons"
import { useState } from "react"
export default function ProjectOption({id,active}:{id:string,active:Boolean}) {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <DotsVerticalIcon />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Edit</DropdownMenuItem>
          <DropdownMenuItem>Delete</DropdownMenuItem>
          <DropdownMenuItem onClick={()=>{toggleActive(id,active);
          }}>
          {active ? "Remove from active" :"Mark as active"}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}

