import { DatePicker } from "@/components/DatePicker";
import CourseFilter from "@/components/CourseFilter";
import CohortFilter from "@/components/CohortFilter";
import { ListFilter } from 'lucide-react';
import SearchBar from "@/components/Search";
import { Separator } from "@/components/ui/separator";
import Drop from "@/components/Drop";
import Cardy from "@/components/Card";
import BulkAction from "@/components/BulkAction";
  
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
    const cohortParam = searchParams?.cohort || 'all';
    const cohort = cohortParam !== 'all' ? Number(cohortParam) : null;

    const students = await fetchStudent();

    const filteredStudent = Array.isArray(students) ? students.filter((student) =>{
        const matchesQuery = query ? student.name.toLowerCase().includes(query.toLowerCase()) : true;
        const matchesCourse = course ? student.course === course : true;
        const matchesCohort = cohort ? cohort !== null && student.cohort === cohort : true;
        const matchesAttendance = date
          ? student.attendance && Array.isArray(student.attendance)
            ? student.attendance.some((attendance) => attendance.date === date)
            : false
          : true;

        return matchesQuery && matchesCourse && matchesCohort && matchesAttendance;
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
                <BulkAction />
                </div>
            </div>
        </div>
    </div>
    </section>
    <Separator className="my-4 bg-gray-300 opacity-90 shadow-md" />
    <section className="mt-3 mb-10 px-6">
        <div className="grid grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4 gap-10 justify-items-center laptop:justify-items-start">
            {filteredStudent.map(student =>(
                <Cardy key={student._id} student={student} />
            ))}
        </div>
    </section>
    </>
  )
}

export default page