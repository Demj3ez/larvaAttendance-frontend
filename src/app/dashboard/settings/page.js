import { TabForm } from "@/components/TabForm";
import { TabForm2 } from "@/components/TabForm2";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronRight } from 'lucide-react';

const page = () => {  
  return (
    <>
      <section className="py-4 px-6" >
        <div className='flex flex-col'>
          <h2 className="font-semibold text-center text-lg laptop:text-xl">Settings</h2>
        </div>
      </section>
      <Separator className="mb-4 bg-gray-300 opacity-90 shadow-md" />
      <section className="flex justify-center laptop:justify-between">
          <Tabs defaultValue="account" className="flex flex-col laptop:flex-row w-full">
            <div className="flex justify-center my-auto laptop:basis-2/5">
              <TabsList className="flex laptop:flex-col w-full">
                <TabsTrigger className="w-full p-3 flex items-center justify-center laptop:justify-between font-semibold" value="profile">Edit Profile <ChevronRight className="hidden laptop:flex" /></TabsTrigger>
                <TabsTrigger className="w-full p-3 flex items-center justify-center laptop:justify-between font-semibold" value="password">Change Your Password <ChevronRight className="hidden laptop:flex" /></TabsTrigger>
              </TabsList>
            </div>
            <div className="">
              <Separator orientation="vertical" className="hidden laptop:flex my-auto h-[500px] bg-gray-300 opacity-90 shadow-md" />
            </div>
            <div className="flex mt-20 laptop:my-auto laptop:basis-3/5">
              <TabsContent value="profile" className="w-full">
                <TabForm />
              </TabsContent>
              <TabsContent value="password" className="w-full">
                <TabForm2 />
              </TabsContent>
            </div>
          </Tabs>
      </section>
    </>
  )
}

export default page