'use client'
import { useState, useEffect } from 'react';
import { useSearchParams } from "next/navigation";
import { useRouter, usePathname } from "next/navigation";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useDebouncedCallback } from 'use-debounce';

const CourseFilter = () => {
    const searchParams = useSearchParams();
    const  pathname = usePathname()
    const { replace } = useRouter()

    const [course, setCourse] = useState(searchParams.get('course') || '')

    useEffect(() => {
        setCourse(searchParams.get('course') || '');
    }, [searchParams]);

    const handleCourseChange =  useDebouncedCallback((value) =>{
        setCourse(value)
        const params = new URLSearchParams(searchParams)
        if(course){
            params.set('course', course)
        } else{
            params.delete('course')
        }
        replace(`${pathname}?${params.toString()}`)
    }, 200, [searchParams, pathname, replace])

    
  return (
    <Select
        onValueChange={handleCourseChange}
        value={course}
    >
        <SelectTrigger className="w-[250px] bg-white shadow-md hover:bg-orange-50">
            <SelectValue placeholder="Select Course" />
        </SelectTrigger>
        <SelectContent className="bg-white">
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