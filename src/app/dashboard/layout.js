"use client"
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Loader from "@/components/Loader";

export default function DashboardLayout({ children }) {
  const [isSuccess, setisSuccess] = useState(false)
  const [userData, setUserData] = useState([])
  const router = useRouter()
  useEffect(() => {(async()=>{
    const { user, error } = await getUser()
    if (error) {
      router.push('/')
      return;
    }
    setisSuccess(true)
    setUserData(user)
  })();
  }, [router]);
  if(!isSuccess){
    return <div className="flex w-full h-screen min-h-screen justify-center items-center m-auto"><Loader /></div>
  }

  const logout = async (e) =>{
    e.preventDefault()
    try {
      await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/tutor/logout`)
      router.push('/')
    } catch (error) {
      console.log(error.message)
    }
  }
  
  return (
    <main className="flex bg-[#E6E6E6] min-h-screen h-full">
      <Sidebar logout={logout}/>
      <div className="laptop:ml-[252px] w-full flex flex-col">
        <Navbar user={userData} logout={logout} />
        {children}
      </div>
    </main>
  );
}

async function getUser() {
  try {
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/tutor/auth/status`, { withCredentials: true })
    return {
      user: data,
      error: null,
    }
  } catch (error) {
    return {
      user: null,
      error: error.message,
    }
  }
}
