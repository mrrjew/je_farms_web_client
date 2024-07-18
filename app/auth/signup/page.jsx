"use client"

import Image from 'next/image'
import React,{useState} from 'react'
import { CiMail,CiLock, CiUser } from "react-icons/ci";
import Link from 'next/link';


export default function page() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Username:', username);
      console.log('Email:', email);
      console.log('Password:', password);
    };

  return (
    <div className='flex max-md:flex-col items-center flex-row-reverse justify-center w-full h-full absolute top-0 left-0 bg-gradient-to-tr from-[#326B23]/70 at-[50%] to-[#79513E]/70 at-[50%] max-md:px-20'>

        <div className='w-1/4 h-auto relative max-md:mb-28 hidden md:flex max-md:runded-full'>
        <Image src="/assets/images/coco_login1.png" alt='coco' width={200} height={100} className='ml-2 w-[1000px] lg:mt-[138px] z-10 rounded-2xl'/>
        <Image src='/assets/images/coco_overlay.png' alt='coco' width={1000} height={100} className='absolute w-max h-max top-0 transform rotate-90deg'/>
        </div>

        <form onSubmit={handleSubmit} className='bg-[#A49979] w-full md:w-1/3 flex flex-col items-center justify-center border-[1px] border-white/70 rounded-3xl py-6 px-12'>
            <h1 className='text-4xl tracking-[0.2px] font-bold bg-gradient-to-r from-[#326B23] to-[#FAFAFA] bg-clip-text text-transparent'>Sign Up</h1>

            <div className="space-y-6 mt-6">
            <div className='flex items-center justify-center border-b-[1px] border-white/70 '>
            <input
                type="text"
                className="bg-transparent border-none placeholder:text-white/80 placeholder:text-sm focus:outline-none text-white/80 text-sm"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

                <CiUser className='text-white'/>
            </div>

            <div className='flex items-center justify-center border-b-[1px] border-white/70 '>
<input
                type="text"
                className="bg-transparent border-none placeholder:text-white/80 placeholder:text-sm focus:outline-none text-white/80 text-sm"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
                <CiMail className='text-white'/>
            </div>
            
            <div className='flex items-center justify-center border-b-[1px] border-white/70 '>
            <input
                type="password"
                className="bg-transparent border-none placeholder:text-white/80 placeholder:text-sm focus:outline-none text-white/80 text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
                <CiLock className='text-white'/>
            </div>
            </div>

            <button type="submit" className='rounded-full bg-[#326B23] text-white p-2 px-16 mt-6'>
                Sign up
            </button>

            <div className='flex w-full mt-4 items-center justify-center text-white text-sm'> 
                <Link href="/auth/login" className='hover:text-[#326B23]'>Already have an account?</Link>
            </div>
        </form>
    </div>
  )
}
