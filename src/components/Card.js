import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Bold, Italic, Underline } from "lucide-react"

const Cardy = (props) => {
  return (
    <Card className="flex flex-col justify-center items-center bg-white rounded-3xl w-48 h-48 shadow-md">
        <Avatar className="mb-2 bg-slate-300 w-12 h-12">
            <AvatarImage src={props.src} alt="student picture" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <CardContent className="flex flex-col space-y-2 items-center">
            <p className="font-semibold text-md flex-wrap">{props.name}</p>
            <p className="text-sm font-light">{props.course}</p>
        </CardContent>
        <ToggleGroup type="single">
            <ToggleGroupItem value="present" aria-label="Toggle present">
                <Bold className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="absent" aria-label="Toggle absent">
                <Italic className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="left" aria-label="Toggle left">
                <Underline className="h-4 w-4" />
            </ToggleGroupItem>
        </ToggleGroup>
    </Card>
  )
}

export default Cardy