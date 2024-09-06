"use client"
 
import { useState } from "react" 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ListFilter } from "lucide-react"
import CourseFilter from "./CourseFilter"
import CohortFilter from "./CohortFilter"
import BulkAction from "./BulkAction"

const Drop = () => {
  return (
    <div className="flex laptop:hidden">
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="px-4 py-4 bg-white flex items-center gap-1 shadow-md hover:bg-orange-50" ><ListFilter className="text-orange-500" size={18} />Filter</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex flex-col gap-4 justify-between w-[200px] p-4 bg-slate-100">
          <CourseFilter />
          <CohortFilter />
          <BulkAction />
      </DropdownMenuContent>
    </DropdownMenu>
    </div>
  )
}

export default Drop