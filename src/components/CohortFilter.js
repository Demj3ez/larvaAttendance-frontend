'use client'
import { useSearchParams } from "next/navigation";
import { useRouter, usePathname } from "next/navigation";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const CohortFilter = () => {
    const searchParams = useSearchParams();
    const  pathname = usePathname()
    const { replace } = useRouter()

    const handleCohortChange = (value) =>{
        const params = new URLSearchParams(searchParams)
        if(value && value !== 'all'){
            params.set('cohort', value)
        } else{
            params.delete('cohort')
        }
        replace(`${pathname}?${params.toString()}`)
    }

    
  return (
    <Select onValueChange={handleCohortChange} defaultValue={searchParams.get('cohort')?.toString() || 'all'}>
        <SelectTrigger className="w-full laptop:w-[180px] bg-white shadow-md hover:bg-orange-50">
            <SelectValue placeholder="Select Cohort" />
        </SelectTrigger>
        <SelectContent className="bg-white">
            <SelectItem value="all">All Cohorts</SelectItem>
            <SelectItem value="1">Cohort 1</SelectItem>
            <SelectItem value="2">Cohort 2</SelectItem>
            <SelectItem value="3">Cohort 3</SelectItem>
            <SelectItem value="4">Cohort 4</SelectItem>
            <SelectItem value="5">Cohort 5</SelectItem>
            <SelectItem value="6">Cohort 6</SelectItem>
        </SelectContent>
    </Select>
  )
}

export default CohortFilter