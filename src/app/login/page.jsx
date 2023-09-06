"use client"
import React from 'react'
import { Crete_Round } from 'next/font/google'

const headingfont = Crete_Round({
    subsets: ['latin'],
    weight: '400'
})


const page = () => {
    return (
        <div className="main flex items-center justify-center border-2 h-[calc(100vh-3rem)]  overflow-hidden ">

            <form action="" className='login-form  h-[60%] dark:shadow-[grey] dark:border-[#ccc] w-[25%] shadow-2xl rounded-[10px] overflow-hidden'>
                <div className={`${headingfont.className}  h-12  pt-7 text-center`}>
                    <h1 className='text-7xl '>LOGIN</h1>
                </div>

                <div className="credentials flex flex-col  h-60 mt-20  w-[60%] mx-[20%]">
                    <label htmlFor="username" className='font-bold'>Email</label>
                    <input type="text" className='border-2 mb-5 rounded-[10px] px-2 border-[#ccc]' placeholder='Enter your email' required />
                    <label htmlFor="password" className='font-bold'>Password</label>
                    <input type="password" className='border-2 rounded-[10px] px-2 border-[#ccc]' placeholder='Enter your password' required />

                    <div className="checkbox flex items-center py-2 px-2">

                        <input type="checkbox" className='accent-[#ccc] outline-none' id='checkbox' />
                        <label htmlFor="checkbox" className='text-[10px]'>Remember me</label>
                    </div>
                </div>

                <div className="submit flex items-center justify-center  h-16">
                    <button className='submit-btn bg-black rounded-xl font-extrabold text-white px-5 py-2 dark:text-[#ccc]'>Submit</button>
                </div>


            </form >
        </div>
    )
}

export default page