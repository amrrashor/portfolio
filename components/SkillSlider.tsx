import React from 'react'
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
    let Skills= [
        {
            title: "HTML",
            icon: <FaHtml5 />
        },
        {
            title: "CSS",
            icon: <FaCss3Alt />
        },
        {
            title: "JavaScript",
            icon: <IoLogoJavascript />
        }
        
]
    
    Skills = [...Skills, ...Skills, ...Skills, ...Skills];


const SkillSlider = () => {
    
    return (
        <div className='w-full overflow-hidden pt-[20%] pb-[5%]'>
            <div className='primary-2 w-[110%] py-[60px] md:py-[70px] rotate-[-5deg] translate-x-[-25px]  '>
                <div className='animate-marquee flex'>
                    {Skills.map((skill, index) => (
                        <div className='flex items-center ml-[30px]'>
                            <div className='text-[20px] md:text-[32px] font-semibold text-white'>{skill?.icon}</div>
                            <div className='text-white mx-[8px] text-[20px] md:text-[32px] font-semibold' key={index}>{skill?.title}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SkillSlider