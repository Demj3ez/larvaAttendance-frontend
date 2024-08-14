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
import Drop from "@/components/Drop";
import Cardy from "@/components/Card";
  

const page = () => {
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
            <Cardy name="Praise" course="Cyber Security" />
            <Cardy name="Praise" course="Cyber Security" />
            <Cardy name="Praise" course="Cyber Security" />
            <Cardy name="Praise" course="Cyber Security" />
            <Cardy name="Praise" course="Cyber Security" />
            <Cardy name="Praise" course="Cyber Security" />
            <Cardy name="Praise" course="Cyber Security" />
        </div>
    </section>
    </>
  )
}

export default page