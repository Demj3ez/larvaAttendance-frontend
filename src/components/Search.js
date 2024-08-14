'use client'
import { Search } from 'lucide-react';
import { useSearchParams } from "next/navigation";
import { useRouter, usePathname } from "next/navigation";
import { useDebouncedCallback } from 'use-debounce';
import { Input } from "@/components/ui/input"

const SearchBar = () => {
    const searchParams = useSearchParams();
    const  pathname = usePathname()
    const { replace } = useRouter()
    
    const handleSearch = useDebouncedCallback((term) => {
        const params = new URLSearchParams(searchParams)
        if(term){
          params.set('query', term)
        } else{
          params.delete('query')
        }
        replace(`${pathname}?${params.toString()}`)
    }, 300)

  return (
    <div className="mx-auto relative w-full flex items-center shadow-md">
        <Input
            className="bg-white w-full py-1 tablet:py-2 pl-10 rounded-xl placeholder:text-sm focus:outline-blue-200 hover:bg-orange-50"
            type="text"
            placeholder="Search"
            onChange={(e)=>{handleSearch(e.target.value)}}
            defaultValue={searchParams.get('query')?.toString()}
        />
        <div className="absolute left-3 text-blue-400">
            <Search size={20} />
        </div>
    </div>
  )
}

export default SearchBar