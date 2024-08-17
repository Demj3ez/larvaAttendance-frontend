"use client"
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function DashboardLayout({ children }) {
  const [isSuccess, setisSuccess] = useState(false)
  const router = useRouter()
  useEffect(() => {(async()=>{
    const { user, error } = await getUser()
    if (error) {
      router.push('/')
      return;
    }
    setisSuccess(true)
  })();
  }, [router]);
  if(!isSuccess){
    return <div className="flex justify-center items-center my-auto text-center text-4xl text-green-500">Loading...</div>
  }


  return (
    <main className="flex bg-[#E6E6E6] min-h-screen h-full">
      <Sidebar />
      <div className="laptop:ml-[252px] w-full flex flex-col">
        <Navbar />
        {children}
      </div>
    </main>
  );
}

async function getUser() {
  try {
    const { data } = await axios.get('http://localhost:3500/api/v1/tutor/auth/status', { withCredentials: true })
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
