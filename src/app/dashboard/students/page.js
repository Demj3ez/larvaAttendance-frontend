import { DatePicker } from "@/components/DatePicker";
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const page = () => {
  return (
    <>
    <section className="py-4 px-6" >
    <div className='flex flex-col'>
        <h2 className="font-semibold mb-4 text-center text-lg laptop:text-xl">Students List</h2>
        <div className="space-y-6">
            <div className="flex gap-2 items-center"><SearchBar /><ListFilter className="mx-8 text-orange-500"  size={28}/></div>
            <div className="flex flex-wrap gap-5 laptop:gap-10 justify-start">
                <DatePicker />
                <Select>
                    <SelectTrigger className="w-[250px] bg-white shadow-md hover:bg-orange-50">
                        <SelectValue placeholder="Select Course" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                        <SelectItem value="cs">Cyber Security</SelectItem>
                        <SelectItem value="da">Data Analysis</SelectItem>
                        <SelectItem value="fe">Frontend Development</SelectItem>
                        <SelectItem value="be">Backend Development</SelectItem>
                        <SelectItem value="md">Mobile Development</SelectItem>
                        <SelectItem value="uud">UIUX Design</SelectItem>
                    </SelectContent>
                </Select>
                <Select>
                    <SelectTrigger className="w-[180px] bg-white shadow-md hover:bg-orange-50">
                        <SelectValue placeholder="Select Cohort" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                        <SelectItem value="c1">Cohort 1</SelectItem>
                        <SelectItem value="c2">Cohort 2</SelectItem>
                        <SelectItem value="c3">Cohort 3</SelectItem>
                        <SelectItem value="c4">Cohort 4</SelectItem>
                        <SelectItem value="c5">Cohort 5</SelectItem>
                        <SelectItem value="c6">Cohort 6</SelectItem>
                    </SelectContent>
                </Select>
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
          <TableRow>
            <TableCell className="text-left text-nowrap">Praise Akintayo</TableCell>
            <TableCell className="text-center text-nowrap">Web development</TableCell>
            <TableCell className="text-center text-nowrap">2</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-left text-nowrap">Praise Akintayo</TableCell>
            <TableCell className="text-center text-nowrap">Web development</TableCell>
            <TableCell className="text-center text-nowrap">2</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-left text-nowrap">Praise Akintayo</TableCell>
            <TableCell className="text-center text-nowrap">Web development</TableCell>
            <TableCell className="text-center text-nowrap">2</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </section>
    </>
  )
}

export default page