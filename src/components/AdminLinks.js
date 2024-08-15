'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

const AdminLinks = () => {
    const pathname = usePathname();

    return (
        <div className="flex flex-nowrap font-semibold gap-10">
            <Link className={`link ${pathname === '/admin/dashboard' ? 'text-[#F39B3B]' : 'text-black'} hover:text-orange-400`} href={'/admin/dashboard'}>Register Tutor</Link>
            <Link className={`link ${pathname === '/admin/dashboard/tutor-list' ? 'text-[#F39B3B]' : 'text-black'} hover:text-orange-400`} href={'/admin/dashboard/tutor-list'}>Tutors List</Link>
        </div>
    )
}

export default AdminLinks