"use client"
import React from 'react'
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { RiSunLine, RiMoonClearLine } from "react-icons/ri"



const ToggleBtn = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();


    useEffect(() => {
        setMounted(true);
    }, []);


    if (!mounted) {
        return null;
    }

    return (
        <button
            className={`w-fit absolute right-5 top-2 p-1 outline-none rounded-lg flex m-1 active:scale-100 duration-200 bacground-opacity-0 dark:bg-[#0000] `}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
            {theme === "light" ? <RiSunLine /> : <RiMoonClearLine />}
        </button>
    )
}

export default ToggleBtn