"use client";

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { CiMail, CiLock, CiUser } from "react-icons/ci";
import Link from 'next/link';
import { toast, ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { RegisterUser } from '@/redux/auth/auth.reducer'; 
import { createCart } from '../../../redux/cart/cart.slice';
import 'react-toastify/dist/ReactToastify.css';

const toastOptions = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: "light",
};

export default function Page() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const { error, loading, success, user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (error) {
      toast.error("Error signing up.", toastOptions);
    } else if (success) {
      handleSuccess();
    }
  }, [error, success]);

  const handleSuccess = async () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem("token", user.token);

      // Dispatch createCart and wait for it to complete
      await dispatch(createCart({ token: localStorage.getItem("token"), id: user.id }));

      // Navigate after dispatching
      window.location.href = "/";
      toast.success("Signed up successfully", toastOptions);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { username, email, password };

    try {
      dispatch(RegisterUser(formData));
    } catch (err) {
      toast.error("Failed to sign up. Please try again.", toastOptions);
    }
  };

  return (
    <div className='flex max-md:flex-col items-center flex-row-reverse justify-center w-full h-full absolute top-0 left-0 bg-gradient-to-tr from-[#326B23]/70 at-[50%] to-[#79513E]/70 max-md:px-20'>
      <div className='w-1/4 h-auto relative max-md:mb-28 hidden md:flex'>
        <Image src="/assets/images/coco_login1.png" alt='Coconut' width={200} height={100} className='ml-2 w-[1000px] lg:mt-[138px] z-10 rounded-2xl'/>
        <Image src='/assets/images/coco_overlay.png' alt='Coconut Overlay' width={1000} height={100} className='absolute w-max h-max top-0 transform rotate-90'/>
      </div>

      <form onSubmit={handleSubmit} className='bg-[#A49979] w-full md:w-1/3 flex flex-col items-center justify-center border-[1px] border-white/70 rounded-3xl py-6 px-12'>
        <h1 className='text-4xl tracking-[0.2px] font-bold bg-gradient-to-r from-[#326B23] to-[#FAFAFA] bg-clip-text text-transparent'>Sign Up</h1>

        <div className="space-y-6 mt-6">
          <InputField
            type="text"
            placeholder="Username"
            value={username}
            onChange={setUsername}
            icon={<CiUser className='text-white' />}
          />
          <InputField
            type="email"
            placeholder="Email"
            value={email}
            onChange={setEmail}
            icon={<CiMail className='text-white' />}
          />
          <InputField
            type="password"
            placeholder="Password"
            value={password}
            onChange={setPassword}
            icon={<CiLock className='text-white' />}
          />
        </div>

        <button type="submit" className='rounded-full bg-[#326B23] text-white p-2 px-16 mt-6'>
          {loading ? "Please wait..." : "Sign up"}
        </button>

        <div className='flex w-full mt-4 items-center justify-center text-white text-sm'>
          <Link href="/auth/login" className='hover:text-[#326B23]'>Already have an account?</Link>
        </div>
      </form>

      {/* React Toastify */}
      <ToastContainer {...toastOptions} />
    </div>
  );
}

// Input Field Component
const InputField = ({ type, placeholder, value, onChange, icon }) => (
  <div className='flex items-center justify-center border-b-[1px] border-white/70'>
    <input
      type={type}
      className="bg-transparent border-none placeholder:text-white/80 placeholder:text-sm focus:outline-none text-white/80 text-sm"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
    {icon}
  </div>
);
