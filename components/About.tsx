import React from 'react';
import Image from 'next/image';

const About = () => {
    return (
        <div className='flex justify-between items-center my-12 max-w-[1300px] mx-auto'>
            <div className='bg-tomato-1 max-w-[500px] max-h-[500px] rounded-full relative border border-solid border-black'>
                <img
                    src={'/person.svg'} 
                    alt='person'
                    className='relative z-20'
                />
                <div className='bg-black top-4 right-4 w-full h-full absolute rounded-full -z-10' />
            </div>

            <div>
                <h2>Who is behind this?</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nemo saepe consectetur ratione. Expedita</p>

                <ul>
                    <li>4 years of experience</li>
                    <li>4 succefull projects</li>
                </ul>
            </div>
        </div>
    )
}

export default About