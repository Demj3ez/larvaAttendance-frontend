import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut } from "lucide-react";
import Image from "next/image";
import AdminLinks from "./AdminLinks";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip";
  

const AdminNav = ({user, logout }) => {
  const nameArray = user.name.split(' ')
  const iName = nameArray[0]?.[0] ?? ''
  const sName = nameArray[1]?.[0] ?? ''

  return (
    <div className="flex sticky top-0 z-50 items-center justify-between py-2 px-4 laptop:px-8 bg-white">
      <Image
        src="/images/larvaLogo.png"
        className="object-contain"
        alt="larva logo"
        width={100}
        height={100}
      />

      <AdminLinks />

      <div className="flex gap-4 items-center">
        <div className="hidden laptop:flex flex-col justify-end items-start">
          <p className="text-md font-semibold">{user.name}</p>
          <p className="text-sm">{user.post}</p>
        </div>
        <Avatar className="w-12 h-12">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback className="bg-gray-100 font-bold text-lg">{iName}{sName}</AvatarFallback>
        </Avatar>
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger className="hover:text-gray-600" onClick={logout}><LogOut /></TooltipTrigger>
                <TooltipContent>
                <p>Logout</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
};

export default AdminNav;
