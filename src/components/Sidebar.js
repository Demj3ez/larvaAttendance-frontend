import { LogOut } from "lucide-react";
import Image from "next/image";
import DashLinks from "./DashLinks";

const Sidebar = ({logout}) => {
  return (
    <div className="hidden fixed z-10 laptop:flex py-[37px] pl-[44px] mr-0.5 justify-between h-screen min-h-screen w-[250px] flex-col overflow-y-hidden bg-white">
      <Image src="/images/larvaLogo.png" className="h-[50px] w-[125px]" alt="larva logo" width={100} height={100}/>
      <DashLinks />
      <div>
        <button onClick={logout} className="hover:text-gray-600 flex gap-4 items-center"><LogOut size={20} />Logout</button>
      </div>
    </div>
  )
}

export default Sidebar