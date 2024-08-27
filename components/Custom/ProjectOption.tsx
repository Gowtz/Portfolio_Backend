import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { DotsVerticalIcon } from "@radix-ui/react-icons"
export default function ProjectOption({active}:{active:Boolean}) {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <DotsVerticalIcon />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Edit</DropdownMenuItem>
          <DropdownMenuItem>Delete</DropdownMenuItem>
          
          {active ? <DropdownMenuItem>Remove from active</DropdownMenuItem> :<DropdownMenuItem>Mark as active</DropdownMenuItem>}
        </DropdownMenuContent>
      </DropdownMenu>

    </>
  )
}

