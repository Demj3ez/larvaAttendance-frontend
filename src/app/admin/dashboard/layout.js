"use client"
import AdminNav from "@/components/AdminNav";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Loader from "@/components/Loader";
import { UserProvider } from "@/components/userContext";

export default function AdminDashboardLayout({ children }) {
  const [isSuccess, setisSuccess] = useState(false)
  const [userData, setUserData] = useState([])
  const router = useRouter()
  useEffect(() => {(async()=>{
    try {
      const { user, error } = await getAdmin()
      if (error) {
        router.push('/admin')
        return;
      }
      setisSuccess(true)
      setUserData(user) 
    } catch (error) {
      router.push('/admin') 
    }
  })();
  }, [router]);

  if(!isSuccess){
    return <div className="flex w-full h-screen min-h-screen justify-center items-center m-auto"><Loader /></div>
  }

  function logout() {
    localStorage.removeItem('accessToken');
    window.location.href = '/admin';
  }

  return (
    <UserProvider value={{ userData, setUserData }}>
      <main className="flex flex-col bg-[#E6E6E6] min-h-screen h-full">
        <AdminNav user={userData} logout={logout}/>
        {children}
      </main>
    </UserProvider>
  );
}

async function getAdmin() {
  const token = localStorage.getItem('accessToken'); 
  if (!token) {
      throw new Error('No token found');
  }

  try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/admin/auth/status`, {
          headers: {
              'Authorization': `Bearer ${token}`
          }
      });
      return {
        user: response.data,
        error: null,
      }
  } catch (error) {
    return {
      error: error.message,
      user: null,
    }
  }
}
