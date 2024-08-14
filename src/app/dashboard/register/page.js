import { RegForm } from "@/components/RegForm";
import { Separator } from "@/components/ui/separator";

const page = () => {
  return (
  <>
    <section className="py-4 px-6" >
      <div className='flex flex-col'>
        <h2 className="font-semibold text-center text-lg laptop:text-xl">Register Students</h2>
      </div>
    </section>
    <Separator className="mb-4 bg-gray-300 opacity-90 shadow-md" />
    <section>
      <RegForm />
    </section>
  </>
  )
}

export default page