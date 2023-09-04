import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className="main border-2 h-12 flex items-center justify-between px-10">
            <div className="logo border-2  inline2">
                doc_drx
            </div>
            <div className="links">
                <ul className='flex'>
                    <li><Link href={"/"}>Home</Link></li>
                    <li><Link href={"/history"}>History</Link></li>
                    <li><Link href={"/aboutus"}>About Us</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar