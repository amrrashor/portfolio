import React from 'react';
import Image from 'next/image';

const About = () => {
    return (
        <div className='flex justify-evenly md:flex-row flex-col items-center my-28 md:my-[240px] max-w-[1300px] mx-auto'>
            <div className='bg-tomato-1 max-w-[500px] max-h-[500px] rounded-full relative border border-solid border-black'>
                <img
                    src='/person.svg'
                    alt='person'
                    className='relative z-20'
                />
                <div className='bg-black top-4 right-4 w-full h-full absolute rounded-full -z-10' />
            </div>

            <div>
                <h2 className='text-black-1 text-2xl md:text-6xl font-extrabold mb-3'>Who's behind this?</h2>
                <p className='text-grey-1 text-xl font-bold mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas </p>

                <ul className='mt-7 list-none'>
                    <li className='mb-5 font-bold text-black-1 text-2xl mr-[-10px]'>&#128187; 4 years of experience</li>
                    <li className='mb-5 font-bold text-black-1 text-2xl'>&#128640; 4 succefull projects</li>
                </ul>
            </div>
        </div>
    )
}

export default About