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

const page = () => {
  return (
    <>
      <section className="py-4 px-6" >
        <div className='flex flex-col'>
          <h2 className="font-semibold text-center text-lg laptop:text-xl">Tutor List</h2>
        </div>
      </section>
      <Separator className="mb-5 bg-gray-300 opacity-90 shadow-md" />
      <section className="mt-3 mb-10 px-6 mx-1 bg-white rounded-t-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-left font-semibold">Name</TableHead>
              <TableHead className="text-center font-semibold">Course</TableHead>
              <TableHead className="text-center font-semibold">Date Joined</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="flex gap-2 items-center text-left text-nowrap">
                <Avatar className="w-10 h-10">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback className="bg-gray-100">CN</AvatarFallback>
                </Avatar>
                <p>Praise Akintayo</p>
              </TableCell>
              <TableCell className="text-center text-nowrap">Web development</TableCell>
              <TableCell className="text-center text-nowrap">August 15, 2024</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="flex gap-2 items-center text-left text-nowrap">
                <Avatar className="w-10 h-10">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback className="bg-gray-100">CN</AvatarFallback>
                </Avatar>
                <p>Praise Akintayo</p>
              </TableCell>
              <TableCell className="text-center text-nowrap">Web development</TableCell>
              <TableCell className="text-center text-nowrap">August 15, 2024</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="flex gap-2 items-center text-left text-nowrap">
                <Avatar className="w-10 h-10">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback className="bg-gray-100">CN</AvatarFallback>
                </Avatar>
                <p>Praise Akintayo</p>
              </TableCell>
              <TableCell className="text-center text-nowrap">Web development</TableCell>
              <TableCell className="text-center text-nowrap">August 15, 2024</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>
    </>
  )
}

export default page