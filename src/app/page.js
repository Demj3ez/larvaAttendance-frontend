import { LoginForm } from "@/components/Form"
import Image from "next/image"

const page = () => {
  return (
    <div className="flex bg-slate-300 h-screen min-h-screen">
      <div className="flex justify-between m-auto shadow-md bg-slate-50 h-3/4 w-3/4">
        <LoginForm />
        <Image src="/images/heroPic.png" priority={true} className="hidden laptop:block w-1/2 laptop:h-100% object-cover" width={1000} height={1000} alt="hero image"/>
      </div>
    </div>
  )
}

export default page