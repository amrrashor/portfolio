import React from 'react';
import Link from 'next/link';
import { IoMdBriefcase } from "react-icons/io";
import { FaRegEnvelope } from "react-icons/fa";
const Hero = () => {
    return (
        <section className='md:max-w-[1280px] mx-[10px] md:mx-auto flex flex-col md:flex-row md:justify-between justify-center items-center md:items-start'>
            <div className='px-[15px] mx:px-[0px] md:mr-[20px]'>
                <h1 className='text-center md:text-left text-primary-1 text-[32px] leading-[40px] md:text-[72px] font-bold md:leading-[100px]'>I'm <span className='primary-4 text-white px-[4px]'>Amr Ashour</span>, <br /> a Software Developer <br /> from <span className='primary-3 text-white px-[4px] py-[2px]'>Egypt</span></h1>
                <div className='flex flex-col md:flex-row mt-[50px] w-full'>
                    <Link
                        href='/contact'
                        className='justify-center mb-[20px] md:mb-[0] md:mr-[30px] hover:bg-[#1c92ff] hover:border-[#1c92ff] p-[16px] md:p-[20px] text-white rounded-[16px] border-1 primary-2 flex items-center text-[18px] font-bold duration-200 leading-7'
                    >
                        <FaRegEnvelope className='mr-[8px]' />Get in touch
                    </Link>
                    <Link
                        href='/portfolio'
                        className='justify-center hover:bg-black-1 hover:text-white p-[16px] md:p-[20px] rounded-[16px] border-1 flex items-center text-[18px] font-bold duration-200 leading-7'
                    >
                        <IoMdBriefcase className='mr-[8px]' />View portfolio
                    </Link>
                </div>
            </div>

            <div className='px-[40px]'>
                <img
                    src="/hero.svg"
                    alt="avatar"
                    className='max-w-[100%] md:max-w-[500px] h-full border-3 rounded-[32px] shadow-2 mt-[45px] md:mt-[0]'
                />
            </div>
        </section>
    )
}

export default Hero