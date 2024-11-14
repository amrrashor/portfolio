import React from 'react';
import ProjectCard from './ProjectCard';
import { PortfolioProjectsData } from '@/constants/constants';


const Portfolio = () => {
    return (
        <div className='w-3/4 mx-auto my-28'>
            <h1 className='text-center text-5xl font-extrabold mb-9'>Take a look at my <span className='gradient-1 px-[4px] text-white'>portfolio</span></h1>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
                {PortfolioProjectsData?.map((p) => (
                    <ProjectCard
                        key={p.id} 
                        Card={p} 
                    />
                ))}
            </div>
        </div>
    )
}

export default Portfolio