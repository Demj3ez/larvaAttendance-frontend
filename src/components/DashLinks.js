'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

const DashLinks = () => {
    const pathname = usePathname();

    return (
        <div className="flex flex-col gap-10">
            <Link className={`link ${pathname === '/dashboard' ? 'text-[#F39B3B]' : 'text-black'} hover:text-orange-400`} href={'/dashboard'}>Mark Attendance</Link>
            <Link className={`link ${pathname === '/dashboard1' ? 'text-[#F39B3B]' : 'text-black'} hover:text-orange-400`} href={'/dashboard1'}>Register Student</Link>
            <Link className={`link ${pathname === '/dashboard2' ? 'text-[#F39B3B]' : 'text-black'} hover:text-orange-400`} href={'/dashboard2'}>Students List</Link>
            <Link className={`link ${pathname === '/dashboard3' ? 'text-[#F39B3B]' : 'text-black'} hover:text-orange-400`} href={'/dashboard3'}>Settings</Link>
        </div>
    )
}

export default DashLinks