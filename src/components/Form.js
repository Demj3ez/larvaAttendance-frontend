"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import axios from "axios"
import { useRouter } from "next/navigation"

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(4, {
    message: "Password must be at least 4 characters.",
  }),
})

export function LoginForm() {
  const router = useRouter()
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })
  
  const { reset } = form
  const { isDirty, isValid, isSubmitting, isSubmitSuccessful } = form.formState
 
  const onSubmit = (values) => {
    try {
      axios.post("http://localhost:3500/api/v1/tutor/login", values, { withCredentials: true })
      router.push('/dashboard')
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(()=>{
    if(isSubmitSuccessful){
      reset()
    }
  },[isSubmitSuccessful, reset])

  return (
    <Form {...form}>
      <div className="flex flex-col m-auto">
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 px-10 w-[417px] flex flex-col m-auto">
        <div className="mb-3 space-y-3">
          <Image src="/images/larvaLogo.png" className="w-auto h-auto" alt="larva logo" width={100} height={100}/>
          <h1 className="font-semibold">Log in to your account</h1>          
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input className="bg-slate-100 rounded-md" placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input className="bg-slate-100 rounded-md mb-2" placeholder="Password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="bg-[#F39B3B] hover:bg-orange-400 text-white rounded-lg" type="submit" disabled={!isDirty || !isValid} >{isSubmitting ? "Loading..." : "Log in as Tutor"}</Button>
      </form>
      <Link href={'/admin/login'} className="text-center text-xs hover:text-slate-600 text-black font-bold mt-3">Admin</Link>
      </div>
    </Form>
  )
}
