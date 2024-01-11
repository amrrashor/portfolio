import React from 'react';
import Link from 'next/link';
import { FaceBook, Instagram, LinkedIn, MailIcon, PhoneIcon } from '@/utils/icons/icons';
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
    return (
        <section className='w-full primary-2 p-[25px] md:p-[50px] mt-[150px] text-primary-4'>
            <div className='  w-full flex justify-between md:flex-row flex-col'>
                <div className='mb-[30px] md:mb-[0px]'>
                    <h4 className='font-bold text-[22px] md:text-[32px] mb-[15px]'>Amr Ashour | Portfolio</h4>
                    <p className=' text-wrap text-[18px] md:text-[22px] font-medium leading-[40px] w-[350px]'>Experienced Software Developer <br />Specilaised in Web and Mobile App development.</p>
                    <div className='flex mt-[25px]'>
                        <a href='https://www.facebook.com/profile.php?id=100078894780673' target='_blank' className='mr-[20px] w-[40px] h-[40px] bg-white flex justify-center items-center rounded-full'>
                            <FaceBook />
                        </a>

                        <a href='' target='_blank' className='w-[40px] h-[40px] bg-white flex justify-center items-center rounded-full mr-[20px]'>
                            <Instagram />
                        </a>

                        <a href='https://www.linkedin.com/in/amr-ashour-8b3aab213/' target='_blank' className='w-[40px] h-[40px] bg-white flex justify-center items-center rounded-full'>
                            <LinkedIn />
                        </a>
                    </div>
                </div>

                <div className='flex flex-col mb-[30px] md:mb-[0px]'>
                    <h4 className='font-bold  text-[22px] md:text-[32px] mb-[15px]'>Pages</h4>
                    <Link href='/' className=' font-normal text-[18px] mb-[10px]'>Home</Link>
                    <Link href='/about' className=' font-normal text-[18px] mb-[10px]'>About</Link>
                    <Link href='/portfolio' className=' font-normal text-[18px] mb-[10px]'>Portfolio</Link>
                </div>

                <div className=''>
                    <h4 className='font-bold  text-[22px] md:text-[32px] mb-[15px]'>Contact me</h4>
                    <div className='flex items-center mb-[20px]'>
                        <div className='w-[40px] h-[40px] bg-white flex justify-center items-center rounded-full mr-[5px]'>
                            <MailIcon />
                        </div>
                        <div className='text-[18px] text-primary-4 font-medium'>amrbahy1996@gmail.com</div>
                    </div>

                    <div className='flex items-center'>
                        <div className='w-[40px] h-[40px] bg-white flex justify-center items-center rounded-full mr-[5px]'>
                            <PhoneIcon />
                        </div>
                        <div className='text-[18px] text-primary-4 font-medium'>+201069974498</div>
                    </div>
                </div>
            </div>
            <div className='w-[3/5] h-[1px] primary-1 mx-auto my-[50px]' />

            <p className='flex justify-center  items-center text-[12px] font-bold'>
                <FaRegCopyright className='mr-[5px]' /> <p>DEVELOPED BY AMR ASHOUR</p>
            </p>
        </section>
    )
}

export default Footer