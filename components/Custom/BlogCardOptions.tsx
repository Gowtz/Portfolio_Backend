'use client'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DotsVerticalIcon } from "@radix-ui/react-icons";
import { deleteBlog, togglePostPublished } from "@/lib/action";

export default function BlogCardOption({ published, bid }: { published: boolean, bid: string }) {
    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <DotsVerticalIcon />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem onClick={() => { deleteBlog(bid) }}>Delete</DropdownMenuItem>
                    <DropdownMenuItem>Edit</DropdownMenuItem>

                        <DropdownMenuItem 
            onClick={()=>{
              togglePostPublished(bid,published)
            }}
          >
                            {published ? "Unlist": "Publish"}
                        </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );

}
