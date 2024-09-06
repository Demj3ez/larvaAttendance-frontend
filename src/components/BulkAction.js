import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const BulkAction = () => {
 
  return (
    <Select>
        <SelectTrigger className="w-full laptop:w-[200px] bg-white shadow-md hover:bg-orange-50">
            <SelectValue placeholder="Bulk Action" />
        </SelectTrigger>
        <SelectContent className="bg-white">
            <SelectItem value="present">Mark all as present</SelectItem>
            <SelectItem value="absent">Mark all as absent</SelectItem>
            <SelectItem value="left">Mark all as left</SelectItem>
        </SelectContent>
    </Select>
  )
}

export default BulkAction