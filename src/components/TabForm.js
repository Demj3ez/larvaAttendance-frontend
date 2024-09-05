"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { useEffect } from "react";
import { User } from 'lucide-react';
import { useUser } from './userContext';
import axios from "axios";
import { toast } from "sonner"
import { Oval  } from 'react-loader-spinner'

const formSchema = z.object({
  name: z.string({ message: "Enter your name" }),
  course: z.string({ message: "Enter your course" }),
})

export function TabForm() {
  const { userData } = useUser();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: userData.name,
      course: userData.course,
    },
  })
  
  const { reset } = form
  const { isDirty, isValid, isSubmitting, isSubmitSuccessful } = form.formState
  const id = userData.id
 
  const onSubmit = async (values) => {
    try {
      await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/tutor/${id}`, values)
      toast('updated successfully')
    } catch (error) {
      const err = error.response.data.msg
      toast(`Couldn\'t update, try again ${err}`)
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
        <div className="flex flex-col gap-3 justify-center items-center">
        <Avatar className="w-20 h-20">
          <AvatarImage  src="https://github.com/shadcn.png" />
          <AvatarFallback className="bg-gray-100" ><User color="black" size={40} /></AvatarFallback>
        </Avatar>
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input className="bg-orange-400 w-48 text-white rounded-3xl" type="file" placeholder="image" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        </div>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input className="bg-slate-100 rounded-md" placeholder="Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="course"
          render={({ field }) => (
            <FormItem>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="bg-slate-100 rounded-md mb-2">
                      <SelectValue placeholder="Select Course" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-slate-100">
                    <SelectItem value="Cyber Security">Cyber Security</SelectItem>
                    <SelectItem value="Data Analysis">Data Analysis</SelectItem>
                    <SelectItem value="Frontend Development">Frontend Development</SelectItem>
                    <SelectItem value="Backend Development">Backend Development</SelectItem>
                    <SelectItem value="Mobile Development">Mobile Development</SelectItem>
                    <SelectItem value="UIUX Design">UIUX Design</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="bg-[#F39B3B] hover:bg-orange-400 text-white rounded-lg" type="submit" disabled={!isDirty || !isValid} >
          {isSubmitting 
            ? <div className="flex gap-3 items-center justify-center"><Oval visible={true} height="18" width="18" color="white" ariaLabel="oval-loading" /> <p>Updating...</p></div>
            : <div>Save</div>
          }
        </Button>
      </form>
    </Form>
  )
}
