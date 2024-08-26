import { ListFilter } from 'lucide-react';
import SearchBar from "@/components/Search";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import CourseFilter from "@/components/CourseFilter";
import CohortFilter from "@/components/CohortFilter";


const fetchStudent = async () =>{
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/students`, { cache: "no-store"});
  if(!response.ok){
    throw new Error("Unable to fetch data")
  }
  return response.json()
}

const page = async ({searchParams}) => {
  const query = searchParams?.query || '';
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
    return false;
  }) : [];
  
  return (
    <>
    <section className="py-4 px-6" >
    <div className='flex flex-col'>
        <h2 className="font-semibold mb-4 text-center text-lg laptop:text-xl">Students List</h2>
        <div className="space-y-6">
            <div className="flex gap-2 items-center"><SearchBar /><ListFilter className="mx-8 text-orange-500"  size={28}/></div>
            <div className="flex flex-wrap gap-5 laptop:gap-10 justify-start">
                <CourseFilter />
                <CohortFilter />
            </div>
        </div>
    </div>
    </section>
    <Separator className="my-4 bg-gray-300 opacity-90 shadow-md" />
    <section className="mt-3 mb-10 px-6 mx-1 bg-white rounded-t-lg">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-left font-semibold">Name</TableHead>
            <TableHead className="text-center font-semibold">Course</TableHead>
            <TableHead className="text-center font-semibold">Cohort</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.isArray(students) && filteredStudent.map(student =>(
            <TableRow key={student._id}>
              <TableCell className="text-left text-nowrap">{student.name}</TableCell>
              <TableCell className="text-center text-nowrap">{student.course}</TableCell>
              <TableCell className="text-center text-nowrap">{student.cohort}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
    </>
  )
}

export default page