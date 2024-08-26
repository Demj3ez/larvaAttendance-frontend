import { DatePicker } from "@/components/DatePicker";
import CourseFilter from "@/components/CourseFilter";
import CohortFilter from "@/components/CohortFilter";
import { ListFilter } from 'lucide-react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
import SearchBar from "@/components/Search";
import { Separator } from "@/components/ui/separator";
import Drop from "@/components/Drop";
import Cardy from "@/components/Card";
  
const fetchStudent = async () =>{
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/students`, { cache: "no-store"});
    if(!response.ok){
      throw new Error("Unable to fetch data")
    }
    return response.json()
  }

const page = async ({searchParams}) => {
    const query = searchParams?.query || '';
    const date = searchParams?.date || '';
    const course = searchParams?.course || '';
    const cohort = searchParams?.cohort || '';

    const students = await fetchStudent();

    const filteredStudent = Array.isArray(students) ? students.filter((student) =>{
        if(student.name.toLowerCase().includes(query.toLowerCase())){
            return true;
        }
        if(student.course === course){
            return true;
        }
        if(student.cohort === cohort){
            return true;
        }
        if (student?.attendance && Array.isArray(student.attendance)) {
            student.attendance.find((attendance) => attendance.date === date)
            return true;
        }
        return false;
    }) : [];

  return (
    <>
    <section className="py-4 px-6" >
    <div className='flex flex-col'>
        <h2 className="font-semibold mb-4 text-center text-lg laptop:text-xl">Mark Attendance</h2>
        <div className="space-y-6">
            <div className="flex gap-2 items-center"><SearchBar /><ListFilter className="mx-8 text-orange-500"  size={28}/></div>
            <div className="flex flex-wrap gap-4 justify-between">
                <DatePicker />
                <Drop />
                <div className="hidden laptop:flex justify-between gap-10">
                <div className="flex flex-wrap gap-5 laptop:gap-10 justify-start">
                    <CourseFilter />
                    <CohortFilter />
                </div>
                <Select>
                    <SelectTrigger className="w-[200px] bg-white shadow-md hover:bg-orange-50">
                        <SelectValue placeholder="Bulk Action" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                        <SelectItem value="present">Mark all as present</SelectItem>
                        <SelectItem value="absent">Mark all as absent</SelectItem>
                        <SelectItem value="left">Mark all as left</SelectItem>
                    </SelectContent>
                </Select>
                </div>
            </div>
        </div>
    </div>
    </section>
    <Separator className="my-4 bg-gray-300 opacity-90 shadow-md" />
    <section className="mt-3 mb-10 px-6">
        <div className="grid grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4 gap-10 justify-items-center laptop:justify-items-start">
            {Array.isArray(students) && filteredStudent.map(student =>(
                <Cardy key={student._id} student={student} />
            ))}
        </div>
    </section>
    </>
  )
}

export default page