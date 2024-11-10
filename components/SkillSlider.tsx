import React from 'react'
import { Skills } from '@/constants/constants';
    
const DuplicatedSkills = [...Skills, ...Skills, ...Skills, ...Skills, ...Skills,...Skills,...Skills];


const SkillSlider = () => {
    return (
        <section className='w-full overflow-hidden pt-[20%] pb-[5%] mb-[100px]'>
            <div className='primary-2 w-[110%] py-[60px] md:py-[70px] rotate-[-5deg] translate-x-[-25px]  '>
                <div className='animate-marquee flex'>
                    {DuplicatedSkills.map((skill) => (
                        <div className='flex items-center ml-[30px]' key={skill?.title}>
                            <div className='text-[20px] md:text-[32px] font-semibold text-white'>{skill?.icon}</div>
                            <div className='text-white mx-[8px] text-[20px] md:text-[32px] font-semibold text-nowrap'>{skill?.title}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SkillSlider