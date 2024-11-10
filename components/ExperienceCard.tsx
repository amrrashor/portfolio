import React from 'react'
import { experienceData } from '@/app/types/types'
import { FaLink } from "react-icons/fa";


interface ExperienceCardProps {
    experience: experienceData
}

const ExperienceCard = ({experience} : ExperienceCardProps) => {
    
    return (
        <div className='primary-1 sm:max-w-[625px] md:max-w-[100%] rounded-[24px]  mb-[30px]'>
            <div className='p-[15px] md:p-[35px] text-[18px] md:text-[24px] font-bold md:leading-[1.083em] text-primary-1'>{experience.date}</div>
            <div className='primary-2 w-full h-[3px]' />
            <div className='p-[15px] md:p-[35px]'>
                <h4 className='text-[20px] md:text-[28px] font-bold md:leading-[1.4em] text-primary-1 mb-[8px]'>{experience.title}</h4>
                <a target='blank' href={experience.link} className='mb-3 text-gray-600 flex items-center'>
                    {experience.company}<FaLink className='ml-1' />
                </a>
                <p className='md:text-[18px] text-[16px] font-medium text-primary-1'>{experience.description}</p>
            </div>
        </div>
    )
}

export default ExperienceCard