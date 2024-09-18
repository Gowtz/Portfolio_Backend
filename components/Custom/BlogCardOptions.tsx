'use client'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DotsVerticalIcon } from "@radix-ui/react-icons";
import { deleteBlog } from "@/lib/action";

export default function BlogCardOption({ published, bid }: { published: boolean, bid: string }) {
    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <DotsVerticalIcon />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem onClick={() => { deleteBlog(bid) }}>delete</DropdownMenuItem>
                    <DropdownMenuItem>Edit</DropdownMenuItem>

                        <DropdownMenuItem>
                            {published ? "Published": "Unlisted"}
                        </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );

}
