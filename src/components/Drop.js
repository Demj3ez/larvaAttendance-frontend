"use client"
 
import { useState } from "react" 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ListFilter } from "lucide-react"

const Drop = () => {
    const [course, setCourse] = useState("cs")
    const [cohort, setCohort] = useState("c1")
    const [bulkAction, setBulkAction] = useState("present")

  return (
    <div className="flex laptop:hidden">
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="px-4 py-4 bg-white flex items-center gap-1 shadow-md hover:bg-orange-50" ><ListFilter className="text-orange-500" size={18} />Filter</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[550px] flex flex-row justify-between p-4 bg-white">
        <div>
        <DropdownMenuLabel>Select Course</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={course} onValueChange={setCourse}>
          <DropdownMenuRadioItem value="cs">Cyber Security</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="da">Data Analysis</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="fe">Frontend Development</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="be">Backend Development</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="md">Mobile Development</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="uud">UIUX Design</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
        </div>
        <div>
        <DropdownMenuLabel>Select Cohort</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={cohort} onValueChange={setCohort}>
          <DropdownMenuRadioItem value="c1">Cohort 1</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="c2">Cohort 2</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="c3">Cohort 3</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="c4">Cohort 4</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="c5">Cohort 5</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="c6">Cohort 6</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
        </div>
        <div>
        <DropdownMenuLabel>Bulk Action</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={bulkAction} onValueChange={setBulkAction}>
          <DropdownMenuRadioItem value="present">Mark all as present</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="absent">Mark all as absent</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="left">Mark all as left</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
    </div>
  )
}

export default Drop