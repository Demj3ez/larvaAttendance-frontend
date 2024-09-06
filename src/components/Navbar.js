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


const Navbar = ({user, logout}) => {
  const nameArray = user.name.split(' ')
  const iName = nameArray[0]?.[0] ?? ''
  const sName = nameArray[1]?.[0] ?? ''

  return (
    <div className="flex sticky top-0 z-50 items-center justify-between py-4 px-2 tablet:px-4 laptop:px-8 bg-white">
      <h2 className="hidden laptop:block font-bold leading-4 text-lg">School Attendance</h2>
      <Sheet>
        <SheetTrigger><AlignLeft className="block laptop:hidden" size="32" color="black" /></SheetTrigger>
        <SheetContent side="left" className="w-[250px] tablet:w-[300px] bg-white flex flex-col justify-between">
          <SheetHeader>
            <SheetTitle className='mb-32'>
              <Image src="/images/larvaLogo.png" className="w-auto h-auto" alt="larva logo" width={100} height={100}/>
            </SheetTitle>
            <SheetDescription className='flex text-left'>
              <DashLinks />
            </SheetDescription>
          </SheetHeader>
          <SheetFooter>
            <button onClick={logout} className="hover:text-gray-600 flex gap-4 items-center"><LogOut size={20} />Logout</button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
      <div className="flex gap-4 items-center">
        <div className="flex flex-col justify-end items-start">
          <p className="text-md font-semibold">{user.name}</p>
          <p className="text-sm">{user.course}</p>
        </div>
        <Avatar className="w-10 laptop:w-12 h-10 laptop:h-12">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback className="bg-yellow-400 text-lg font-bold" >{iName}{sName}</AvatarFallback>
        </Avatar>
      </div>
    </div>
  )
}

export default Navbar