"use client";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import axios from "axios";
import { cn } from "@/lib/utils";
import { useState } from "react";

const Cardy = ({ student }) => {
  const currentDate = new Date();

  const date = currentDate
    .toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
    .replace(/\//g, "-");

  const nameArray = student.name.split(" ");
  const iName = nameArray[0]?.[0] ?? "";
  const sName = nameArray[1]?.[0] ?? "";

  let attendanceStatus = "";
  if (student?.attendance && Array.isArray(student.attendance)) {
    const matchingAttendance = student.attendance.find(
      (attendance) => attendance.date === date
    );
    attendanceStatus = matchingAttendance?.status;
  }

  const [toggleValue, setToggleValue] = useState(attendanceStatus || "");
  const [disable, setDisable] = useState(!!attendanceStatus);

  const studentId = student._id;

  const handleToggleChange = async (value) => {
    if (disable) return;

    const status = value;
    const data = { studentId, date, status };

    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/attendance`, data);
      console.log(data);
      setToggleValue(value);
      setDisable(true);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Card className="flex flex-col justify-between py-3 items-center bg-white rounded-3xl w-48 h-48 shadow-md">
      <Avatar className="mb-2 text-lg font-bold bg-slate-300 w-12 h-12">
        <AvatarImage src={student.image} alt="student picture" />
        <AvatarFallback>
          {iName}
          {sName}
        </AvatarFallback>
      </Avatar>
      <div className="flex flex-col space-y-1 items-center">
        <p className="font-semibold text-md flex-wrap">{student.name}</p>
        <p className="text-sm font-light text-center">{student.course}</p>
      </div>
      <ToggleGroup type="single" onValueChange={handleToggleChange}>
        <ToggleGroupItem
          value="present"
          aria-label="Toggle present"
          disabled={disable}
        >
          <p
            className={cn(
              "font-bold flex items-center justify-center rounded-xl w-8 h-8 bg-slate-200 hover:bg-green-300",
              toggleValue === "present" && !disable
                ? "bg-green-500"
                : disable && toggleValue === "present"
                ? "bg-green-500 cursor-not-allowed"
                : ""
            )}
          >
            P
          </p>
        </ToggleGroupItem>
        <ToggleGroupItem
          value="absent"
          aria-label="Toggle absent"
          disabled={disable}
        >
          <p
            className={cn(
              "font-bold flex items-center justify-center rounded-xl w-8 h-8 bg-slate-200 hover:bg-red-300",
              toggleValue === "absent" && !disable
                ? "bg-red-500"
                : disable && toggleValue === "absent"
                ? "bg-red-500 cursor-not-allowed"
                : ""
            )}
          >
            A
          </p>
        </ToggleGroupItem>
        <ToggleGroupItem
          value="left"
          aria-label="Toggle left"
          disabled={disable}
        >
          <p
            className={cn(
              "font-bold flex items-center justify-center rounded-xl w-8 h-8 bg-slate-200 hover:bg-orange-300",
              toggleValue === "left" && !disable
                ? "bg-orange-500"
                : disable && toggleValue === "left"
                ? "bg-orange-500 cursor-not-allowed"
                : ""
            )}
          >
            L
          </p>
        </ToggleGroupItem>
      </ToggleGroup>
    </Card>
  );
};

export default Cardy;
