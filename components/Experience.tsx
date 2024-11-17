"use client";
import React from 'react';
import { GoPerson } from "react-icons/go";
import AnimatedComponent from './AnimatedComponent';
import ExperienceCard from './ExperienceCard';
import { experienceData } from '@/constants/constants';


const Experience = () => {
    return (
        <section className='h-full primary-2 pt-[240px] pb-[240px]'>
            <div className='relative overflow-visible min-h-[400px] max-w-[1300px] mx-auto px-[50px] flex justify-between md:flex-row flex-col'>
                {/* ===left part=== */}
                <AnimatedComponent>
                    <div className=' block'>
                        <div className='text-center md:text-left mb-[25px] md:mb-0 w-full md:sticky top-0 text-white md:text-[52px] text-[30px] font-bold md:leading-[1.15em]'>
                            <div className='w-full'>Take a look at my<br /><span className='gradient-1 px-[4px]'>past experience</span></div>
                            <a  
                                href='/AmrAshourResume.docx.pdf'
                                download='AmrAshourResume.docx.pdf'
                                className='cursor-pointer w-full md:w-max mt-[35px] flex hover:bg-cyan-1 hover:text-white duration-200 bg-white border-1 text-primary-1 text-center rounded-[16px] px-[38px] py-[26px] text-[18px] font-bold leading-[1.1em]'
                            >
                                <GoPerson className='mr-[7px]' />
                                See full resume
                            </a>
                        </div>
                    </div>
                </AnimatedComponent>

                {/* ===right part=== */}
                <div className='sm:max-w-[625px]'>
                    {experienceData?.map((exp, i) => (
                        <AnimatedComponent key={exp.id} delay={i}>
                            <ExperienceCard 
                                key={exp.id}  
                                experience={exp}
                            />
                        </AnimatedComponent>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience