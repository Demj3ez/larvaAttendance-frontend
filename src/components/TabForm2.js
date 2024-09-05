"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useEffect } from "react";
import { useUser } from './userContext';
import axios from "axios";
import { toast } from "sonner"
import { Oval  } from 'react-loader-spinner'

const formSchema = z.object({
  currentpassword: z.string({ message: "Enter your current password" }),
  newpassword: z.string({ message: "Enter new password" }),
  confirmpassword: z.string({ message: "Confirm your new password" }),
}).refine((data)=> data.newpassword === data.confirmpassword,{
  message: "Passwords don't match",
  path: ["confirmpassword"],
})

export function TabForm2() {
  const { userData } = useUser();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      currentpassword: "",
      newpassword: "",
      confirmpassword: "",
    },
  })
  
  const { reset } = form
  const { isDirty, isValid, isSubmitting, isSubmitSuccessful } = form.formState
  const id = userData.id
 
  const onSubmit = async (values) => {
    try {
      await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/tutor/updatepw/${id}`, values)
      toast('Password updated successfully')
    } catch (error) {
      const err = error.response.data.msg
      toast(err)
    }
  }

  useEffect(()=>{
    if(isSubmitSuccessful){
      reset()
    }
  },[isSubmitSuccessful, reset])

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 max-w-lg px-10 flex flex-col m-auto">
        <FormField
          control={form.control}
          name="currentpassword"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input className="bg-slate-100 rounded-md" placeholder="Current Password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="newpassword"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input className="bg-slate-100 rounded-md" placeholder="New Password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmpassword"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input className="bg-slate-100 rounded-md mb-2" placeholder="Confirm Password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="bg-[#F39B3B] hover:bg-orange-400 text-white rounded-lg" type="submit" disabled={!isDirty || !isValid} >
          {isSubmitting 
            ? <div className="flex gap-3 items-center justify-center"><Oval visible={true} height="18" width="18" color="white" ariaLabel="oval-loading" /> <p>Updating Password...</p></div>
            : <div>Save</div>
          }
        </Button>
      </form>
    </Form>
  )
}
