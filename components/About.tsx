"use client";
import React from 'react';
import AnimatedComponent from './AnimatedComponent';
import { HiComputerDesktop } from "react-icons/hi2";
import { FaRocket } from "react-icons/fa";

const About = () => {
    return (
        <div className='flex justify-center  md:justify-evenly md:flex-row flex-col items-center my-28 md:my-[240px] md:max-w-[1300px] md:mx-auto' id='about'>
            {/* Left side */}
            <AnimatedComponent className='md:mb-0 mb-9'>
                <div className='bg-tomato-1 md:max-w-[500px] md:max-h-[500px] max-w-[350px] max-h-[350px] rounded-full relative border border-solid border-black'>
                    <img
                        src='/person.svg'
                        alt='person'
                        className='relative z-20'
                    />
                    <div className='bg-black top-4 right-1 md:right-4 w-full h-full absolute rounded-full -z-10' />
                </div>
            </AnimatedComponent>

            {/* Right side */}
            <AnimatedComponent delay={0.5}>
                <div className='md:mx-0 mx-4 text-center'>
                    <h2 className='text-black-1 text-2xl md:text-6xl font-extrabold mb-3'>Who's behind this?</h2>
                    <p className='text-grey-1 text-xl font-bold mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas </p>

                    <ul className='mt-7 list-none'>
                        <li className='mb-5 font-bold text-black-1 text-2xl mr-[-10px] md:justify-start flex items-center justify-center'><HiComputerDesktop className='mr-2' />4 years of experience</li>
                        <li className='mb-5 font-bold text-black-1  md:justify-start text-2xl flex items-center justify-center'><FaRocket className='mr-2' />4 succefull projects</li>
                    </ul>
                </div>
            </AnimatedComponent>
        </div>
    )
}

export default About