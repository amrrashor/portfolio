'use client';
import React, {useState} from 'react';
import Link from 'next/link';
import { FaRegEnvelope, FaLaptopCode } from "react-icons/fa";
import { BiMenuAltRight, BiMenu } from "react-icons/bi";
import AnimatedComponent from './AnimatedComponent';
import { navbarAnimationVariant } from '@/constants/animationsVariants';
const Navbar = () => {
    const [menu, showMenu] = useState(false)
    return (
        <nav className='relative z-30 w-full pt-[34px] pb-[34px] pl-[15px] pr-[15px]'>
            <AnimatedComponent customAnimation={navbarAnimationVariant}>
                <div className='relative z-20 flex justify-between items-center h-[78px] max-w-[730px] bg-white mx-auto shadow-1 border-1 px-[8px] md:px-[24px] py-[14px] rounded-[18px]'>
                    <div className='w-[42px] h-[42px]'>
                        <FaLaptopCode className='w-[42px] h-[42px]' />
                    </div>

                    <div className='hidden md:flex justify-evenly w-full'>
                        <Link href={'/'} className='hover:text-[#1c92ff] duration-200 font-bold text-primary-1 text-[18px] leading-[24px]'>Home</Link>
                        <Link href='#about' className='hover:text-[#1c92ff] duration-200 font-bold text-primary-1 text-[18px] leading-[24px]'>About</Link>
                        <Link href='#portfolio' className='hover:text-[#1c92ff] duration-200 font-bold text-primary-1 text-[18px] leading-[24px]'>Portfolio</Link>
                    </div>
                    
                    <Link href='/contact' className='hidden md:block hover:bg-[#1c92ff] hover:border-[#1c92ff] duration-200 primary-2 border-1 p-[13px] text-center rounded-[12px]'>
                        <FaRegEnvelope className='text-[24px] font-bold text-white' />
                    </Link>


                    <div onClick={() => showMenu(!menu)} className='block md:hidden'>
                        {menu ? (
                            <BiMenuAltRight className='w-[40px] h-[40px] text-primary-2' />
                        ): (
                            <BiMenu className='w-[40px] h-[40px] text-primary-2'/>
                        )}
                    </div>

                    <div className={`${menu ? "opacity-1 translate-y-[150px]" : "opacity-0 translate-y-[-150px]"} z-10 rounded-[24px] px-[24px] py-[32px] justify-between flex flex-col w-full ml-[-8px] border-1 bg-white absolute duration-200`}>
                        <Link onClick={() => showMenu(!menu)} href={'/'} className='hover:text-[#1c92ff] duration-200 font-bold text-primary-1 text-[15px] leading-[20px] mb-[20px]'>Home</Link>
                        <Link onClick={() => showMenu(!menu)} href='/about' className='hover:text-[#1c92ff] duration-200 font-bold text-primary-1 text-[15px] leading-[20px] mb-[20px]'>About</Link>
                        <Link onClick={() => showMenu(!menu)} href='/portfolio' className='hover:text-[#1c92ff] duration-200 font-bold text-primary-1 text-[15px] leading-[20px] '>Portfolio</Link>
                    </div>
                </div>
            </AnimatedComponent>
        </nav>
    )
}

export default Navbar