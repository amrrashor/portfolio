"use client"
import React from 'react';
import ProjectCard from './ProjectCard';
import { PortfolioProjectsData } from '@/constants/constants';
import { motion } from 'motion/react';

const Portfolio = () => {
    return (
        <div className='w-3/4 mx-auto my-28'>
            <h1 className='text-center text-5xl font-extrabold mb-9'>Take a look at my <span className='gradient-1 px-[4px] text-white'>portfolio</span></h1>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
                {PortfolioProjectsData?.map((p, i) => (
                    <motion.div
                        initial={{opacity: 0, y:100}}
                        whileInView={{opacity: 1, y:0}}
                        transition={{
                            delay: i  * 0.5,
                            duration: 0.3,
                        }}
                        viewport={{ once: true }}
                    >
                        <ProjectCard
                            key={p.id} 
                            Card={p} 
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Portfolio