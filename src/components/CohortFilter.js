'use client'
import { useState, useEffect } from 'react';
import { useSearchParams } from "next/navigation";
import { useRouter, usePathname } from "next/navigation";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const CohortFilter = () => {
    const searchParams = useSearchParams();
    const  pathname = usePathname()
    const { replace } = useRouter()

    const [cohort, setCohort] = useState(searchParams.get('cohort') || '')

    useEffect(() => {
        setCohort(searchParams.get('cohort') || '');
    }, [searchParams]);

    const handleCohortChange = (value) =>{
        setCohort(value)
        const params = new URLSearchParams(searchParams)
        if(cohort){
            params.set('cohort', cohort)
        } else{
            params.delete('cohort')
        }
        replace(`${pathname}?${params.toString()}`)
      }

    
  return (
    <Select
        onValueChange={handleCohortChange}
        value={cohort}
    >
        <SelectTrigger className="w-[180px] bg-white shadow-md hover:bg-orange-50">
            <SelectValue placeholder="Select Cohort" />
        </SelectTrigger>
        <SelectContent className="bg-white">
            <SelectItem value="Cohort 1">Cohort 1</SelectItem>
            <SelectItem value="Cohort 2">Cohort 2</SelectItem>
            <SelectItem value="Cohort 3">Cohort 3</SelectItem>
            <SelectItem value="Cohort 4">Cohort 4</SelectItem>
            <SelectItem value="Cohort 5">Cohort 5</SelectItem>
            <SelectItem value="Cohort 6">Cohort 6</SelectItem>
        </SelectContent>
    </Select>
  )
}

export default CohortFilter