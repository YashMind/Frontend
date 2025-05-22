import Link from 'next/link'
import React from 'react'
import { IoIosPeople, IoIosStar } from 'react-icons/io'
import { IoPerson } from 'react-icons/io5'
import { BsQuestionCircleFill } from "react-icons/bs";
import { FaGear } from 'react-icons/fa6';

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params
    return (
        <div className='flex m-4'>
            <div className='basis-1/5 rounded-xl bg-white/30'>Sidebar
                <Link className='px-2 flex' href={"/settings/profile"}> <IoPerson size={25} />Profile</Link>
                <Link className='px-2 flex' href={"/settings/prefrence"}><IoIosStar size={25} /> Preference</Link>
                <Link className='px-2 flex' href={"/settings/team"}><IoIosPeople size={25} />Team</Link>
                <Link className='px-2 flex' href={"/settings/help"}><BsQuestionCircleFill size={25} />Help</Link>
                <Link className='px-2 flex' href={"/settings/setting"}><FaGear size={25} />Settings</Link>

            </div>
            <div className='basis-4/5 rounded-xl bg-white/30'>
                {slug == "profile"}
            </div>
        </div>
    )
}

export default page