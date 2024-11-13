import React from 'react';
import ProjectCard from './ProjectCard';


const Portfolio = () => {
    return (
        <div className='w-3/4 mx-auto my-28'>
            <h1 className='text-center text-5xl font-extrabold mb-9'>Take a look at my <span className='gradient-1 px-[4px] text-white'>portfolio</span></h1>
            <div className='flex justify-center items-center flex-wrap'>
                <ProjectCard id={1} />
                <ProjectCard id={2} />
            </div>
        </div>
    )
}

export default Portfolio