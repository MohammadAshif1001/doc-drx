"use client"
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import { RiMenuFill, RiGithubFill } from 'react-icons/ri'
import ToggleBtn from '../togglebutton/ToggleBtn'

const Navbar = () => {
    const [windowWidth, setWindowWidth] = useState(null);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const menuDisplayRef = useRef(null);

    useEffect(() => {
        const updateWindowWidth = () => {
            setWindowWidth(window.innerWidth);
        };

        // Initial window width value
        updateWindowWidth();

        // Event listener on the window object to dynamically change the windowWidth on resize
        window.addEventListener('resize', updateWindowWidth);

        // Removal of event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', updateWindowWidth);
        };
    }, []);

    // Toggle mobile menu visibility
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    // Close mobile menu when a link is clicked
    const handleLinkClick = () => {
        setMobileMenuOpen(false);
    };


    return (
        <div className="main border-b-2 h-12 flex items-center justify-between px-12">
            <div className="logo inline2 font-bold font-color">DOC_DRX</div>
            {windowWidth <= 768 ? (
                <>
                    <div
                        className="hamburger-icon cursor-pointer"
                        onClick={toggleMobileMenu}
                    >
                        <RiMenuFill className='font-bold text-black text-2xl mr-1' />
                        <ToggleBtn />
                    </div>
                    {/* Mobile Menu */}
                    {isMobileMenuOpen && (
                        <div className="mob-links flex rounded-md flex-col absolute top-10 right-4 bg-white text-black w-32" ref={menuDisplayRef}>
                            <div className='navdiv flex flex-col h-40 border-2 items-center justify-center'>

                                <Link href="/" passHref>
                                    Home
                                </Link>
                                <Link href="/history" passHref>
                                    History
                                </Link>
                                <Link href="/aboutus" passHref>
                                    About Us
                                </Link>
                                <Link href="https:/github.com/darkxxdevs/doc-drx">
                                    Github
                                </Link>

                            </div>
                        </div>
                    )}
                </>
            ) : (
                <div className="links">
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
                            <Link href="https:/github.com/darkxxdevs/doc-drx">
                                <RiGithubFill className='text-2xl' />
                            </Link>
                        </li>

                        <li>
                            <ToggleBtn />
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;