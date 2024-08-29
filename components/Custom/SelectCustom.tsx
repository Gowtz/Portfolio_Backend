import * as React from "react"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface List {
  label: string,
  value: string
}
export function SelectDropdown({ list, name }: { list: List[], name: string }) {
  return (
    <Select name={name}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder={`Select ${name}`} />
      </SelectTrigger>
      <SelectContent >
        <SelectGroup>
          <SelectLabel>{name}</SelectLabel>
          {list.map(li => <SelectItem key={li.value} value={li.value}>{li.label}</SelectItem>)}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
