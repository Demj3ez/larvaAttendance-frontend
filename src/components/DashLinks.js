'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

const DashLinks = () => {
    const pathname = usePathname();

    return (
        <div className="flex flex-col gap-10">
            <Link className={`link ${pathname === '/dashboard' ? 'text-[#F39B3B]' : 'text-black'} hover:text-orange-400`} href={'/dashboard'}>Mark Attendance</Link>
            <Link className={`link ${pathname === '/dashboard/register' ? 'text-[#F39B3B]' : 'text-black'} hover:text-orange-400`} href={'/dashboard/register'}>Register Student</Link>
            <Link className={`link ${pathname === '/dashboard/students' ? 'text-[#F39B3B]' : 'text-black'} hover:text-orange-400`} href={'/dashboard/students'}>Students List</Link>
            <Link className={`link ${pathname === '/dashboard/settings' ? 'text-[#F39B3B]' : 'text-black'} hover:text-orange-400`} href={'/dashboard/settings'}>Settings</Link>
        </div>
    )
}

export default DashLinks