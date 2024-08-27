"use client"

import { useState } from 'react';
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { format, parse } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

export function DatePicker() {
  const searchParams = useSearchParams()
  const  pathname = usePathname()
  const { replace } = useRouter()

  const initialDate = searchParams.get('date')
    ? parse(searchParams.get('date'), 'dd-MM-yyyy', new Date())
    : new Date();

  const [date, setDate] = useState(initialDate);

  const handleDateChange = (selectedDate) => {
    if (selectedDate) {
      setDate(selectedDate);
      const formattedDate = format(selectedDate, 'dd-MM-yyyy');
      const params = new URLSearchParams(searchParams);
      params.set('date', formattedDate);
      replace(`${pathname}?${params.toString()}`);
    } else {
      setDate(null);
      const params = new URLSearchParams(searchParams);
      params.delete('date');
      replace(`${pathname}?${params.toString()}`);
    }
  };


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
          {date ? format(date, 'dd-MM-yyyy') : <span>Select Date</span>}
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
