import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AlignLeft } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import DashLinks from "./DashLinks";
import { LogOut } from "lucide-react"
import Image from "next/image"
import Link from "next/link"


const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-4 px-8 bg-white">
      <h2 className="hidden laptop:block font-bold leading-4 text-lg">School Attendance</h2>
      <Sheet>
        <SheetTrigger><AlignLeft className="block laptop:hidden" size="32" color="black" /></SheetTrigger>
        <SheetContent side="left" className="w-[250px] tablet:w-[300px] bg-white flex flex-col justify-between">
          <SheetHeader>
            <SheetTitle className='mb-32'>
              <Image src="/images/larvaLogo.png" className="object-contain" alt="larva logo" width={100} height={100}/>
            </SheetTitle>
            <SheetDescription className='flex text-left'>
              <DashLinks />
            </SheetDescription>
          </SheetHeader>
          <SheetFooter>
            <Link href="/logout" className="hover:text-gray-600 flex gap-4 items-center"><LogOut size={20} />Logout</Link>
          </SheetFooter>
        </SheetContent>
      </Sheet>
      <div className="flex gap-8 items-center">
        <div className="flex flex-col justify-end items-end">
          <p className="text-md font-semibold">Praise Akintayo</p>
          <p className="text-sm">Web Development</p>
        </div>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback className="bg-gray-100" >CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  )
}

export default Navbar