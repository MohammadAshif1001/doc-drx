"use client"
import Link from 'next/link';
import React, { useState, useRef } from 'react';
import { RiMenuFill, RiGithubFill } from 'react-icons/ri';
import ToggleBtn from '../togglebutton/ToggleBtn';

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const menuDisplayRef = useRef(null);

    // menu toggle for mobile menu , LOL!!!
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    // method to close menu when a link is clicked :)
    const handleLinkClick = () => {
        setMobileMenuOpen(false);
    };

    return (
        <div className="main outline-none shadow-lg dark:shadow-md dark:shadow-[#ccc] h-12 flex items-center justify-between px-12">
            <div className="logo inline2 font-bold font-color">DOC_DRX</div>
            {/* Hamburger menu only visible on smaller screen */}
            <div className="lg:hidden hamburger-icon cursor-pointer" onClick={toggleMobileMenu}>
                <RiMenuFill className='font-bold text-black text-2xl dark:text-white' />
            </div>
            {/* Mobile Menu */}
            <div className={`mob-links flex flex-col dark:bg-[#121212ff] absolute top-10 right-4 bg-white shadow-xl dark:shadow-[grey] text-black w-32 ${isMobileMenuOpen ? 'block' : 'hidden'}`} ref={menuDisplayRef}>
                <div className='navdiv flex flex-col h-40 border-2 items-center dark:text-white justify-center'>
                    <Link href="/" passHref onClick={handleLinkClick}>
                        Home
                    </Link>
                    <Link href="/history" passHref onClick={handleLinkClick}>
                        History
                    </Link>
                    <Link href="/aboutus" passHref onClick={handleLinkClick}>
                        About Us
                    </Link>
                    <Link href="/login" passHref onClick={handleLinkClick}>
                        Login
                    </Link>
                    <Link href="https:/github.com/darkxxdevs/doc-drx" onClick={handleLinkClick}>
                        Github
                    </Link>
                    <ToggleBtn />
                </div>
            </div>
            {/* Desktop Links */}
            <div className="links hidden lg:flex gap-8">
                <ul className="flex gap-8">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/history">History</Link>
                    </li>
                    <li>
                        <Link href="/aboutus">About Us</Link>
                    </li>
                    <li>
                        <Link href="/login" passHref>
                            Login
                        </Link>
                    </li>
                    <li>
                        <Link href="https:/github.com/darkxxdevs/doc-drx">
                            <RiGithubFill className='text-2xl' />
                        </Link>
                    </li>
                    <li>
                        <ToggleBtn />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
