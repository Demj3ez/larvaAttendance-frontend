'use client'
import { useSearchParams } from "next/navigation";
import { useRouter, usePathname } from "next/navigation";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const CourseFilter = () => {
    const searchParams = useSearchParams()
    const  pathname = usePathname()
    const { replace } = useRouter()

    const handleCourseChange = (value) => {
        const params = new URLSearchParams(searchParams)
        if(value && value !== 'all'){
            params.set('course', value)
        } else{
            params.delete('course')
        }
        replace(`${pathname}?${params.toString()}`)
    }

    
  return (
    <Select onValueChange={handleCourseChange} defaultValue={searchParams.get('course')?.toString() || 'all'}>
        <SelectTrigger className="w-full laptop:w-[250px] bg-white shadow-md hover:bg-orange-50">
            <SelectValue placeholder="Select Course" />
        </SelectTrigger>
        <SelectContent className="bg-white">
            <SelectItem value="all">All Courses</SelectItem>
            <SelectItem value="Cyber Security">Cyber Security</SelectItem>
            <SelectItem value="Data Analysis">Data Analysis</SelectItem>
            <SelectItem value="Frontend Development">Frontend Development</SelectItem>
            <SelectItem value="Backend Development">Backend Development</SelectItem>
            <SelectItem value="Mobile Development">Mobile Development</SelectItem>
            <SelectItem value="UIUX Design">UIUX Design</SelectItem>
        </SelectContent>
    </Select>
  )
}

export default CourseFilter