import React from 'react'
import Link from 'next/link'
import { RiDiscordFill, RiLinkedinBoxFill, } from 'react-icons/ri'
import { IoLogoOctocat } from 'react-icons/io5'

const Foooter = () => {
    return (
        <div className='bg-white h-8 flex items-center justify-between px-5'>
            <div className="cp font-bold flex items-center">
                &copy;darkxxdevs
            </div>

            <div className="social flex gap-2">
                <Link href={""}>
                    <RiDiscordFill className='text-2xl text-[rgba(0,0,0,0.7)]' />
                </Link>

                <Link href={"https://twitter.com/Devsdarkxx"}>
                    <IoLogoOctocat className='text-xl text-[rgba(0,0,0,0.7)]' />
                </Link>

                <Link href={""}>
                    <RiLinkedinBoxFill className='text-xl text-[rgba(0,0,0,0.7)]' />
                </Link>

            </div>
        </div>
    )
}

export default Foooter