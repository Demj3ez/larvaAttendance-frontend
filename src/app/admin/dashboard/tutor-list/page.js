import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";


const fetchTutors = async () =>{
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tutors`, { cache: "no-store"});
  if(!response.ok){
    throw new Error("Unable to fetch data")
  }
  return response.json()
}

const page = async () => {

  const tutors = await fetchTutors();
  
  const formatDate = (dateString) => {
    const dateObj = new Date(dateString);
    return dateObj.toLocaleDateString('en-GB');
  }

  const nameArray = (name) => {
    const fNames = name.split(' ')
    const iName = fNames[0]?.[0] ?? ''
    const sName = fNames[1]?.[0] ?? ''
    return iName + sName
  }

  return (
    <>
      <section className="py-4 px-6" >
        <div className='flex flex-col'>
          <h2 className="font-semibold text-center text-lg laptop:text-xl">Tutor List</h2>
        </div>
      </section>
      <Separator className="mb-5 bg-gray-300 opacity-90 shadow-md" />
      <section className="mt-3 mb-10 bg-white rounded-t-lg container">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-left font-semibold pl-12">Name</TableHead>
              <TableHead className="text-center font-semibold">Course</TableHead>
              <TableHead className="text-center font-semibold">Date Joined</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tutors.map(tutor =>(
            <TableRow key={tutor._id}>
              <TableCell className="flex gap-2 items-center text-left text-nowrap">
                <Avatar className="w-10 h-10">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback className="bg-gray-100 font-bold text-md">{nameArray(tutor.name)}</AvatarFallback>
                </Avatar>
                <p>{tutor.name}</p>
              </TableCell>
              <TableCell className="text-center text-nowrap">{tutor.course}</TableCell>
              <TableCell className="text-center text-nowrap">{formatDate(tutor.createdAt)}</TableCell>
            </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
    </>
  )
}

export default page