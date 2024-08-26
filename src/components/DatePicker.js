"use client"

import { useState, useEffect } from 'react';
import { useSearchParams } from "next/navigation";
import { useRouter, usePathname } from "next/navigation";
import { useDebouncedCallback } from 'use-debounce';
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function DatePicker() {
  const searchParams = useSearchParams();
  const  pathname = usePathname()
  const { replace } = useRouter()

  const [date, setDate] = useState(new Date())

  useEffect(() => {
    setDate(searchParams.get('date') || '');
  }, [searchParams]);

  const handleDateChange =  useDebouncedCallback((value) =>{
      setDate(value)
      const params = new URLSearchParams(searchParams)
      if(date){
          params.set('date', date)
      } else{
          params.delete('date')
      }
      replace(`${pathname}?${params.toString()}`)
  }, 200, [searchParams, pathname, replace])


  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className={cn(
            "w-[250px] justify-start shadow-md hover:bg-orange-50 text-left bg-white font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4 text-orange-500" />
          {date ? format(date, "dd-MM-yyyy") : <span>Select Date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 bg-white">
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleDateChange}
          disabled={(date) =>
            date > new Date() || date < new Date("2024-01-01")
          }
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
