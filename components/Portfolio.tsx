"use client"
import React, {useState} from 'react';
import ProjectCard from './ProjectCard';
import { PortfolioProjectsData } from '@/constants/constants';
import AnimatedComponent from './AnimatedComponent';
import { PortfolioProjectsProps } from '@/types/types';
import ProjectModal from './ProjectModal';

const Portfolio = () => {
    const [selectedProject, setSelectedProject] = useState<PortfolioProjectsProps | null>(null); 
    const [showCard, setShowCard] = useState(false);
    return (
        <div className='w-3/4 mx-auto my-28'>
            <h1 className='text-center text-5xl font-extrabold mb-9'>Take a look at my <span className='gradient-1 px-[4px] text-white'>portfolio</span></h1>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
                {PortfolioProjectsData?.map((p, i) => (
                    <AnimatedComponent key={p.id} delay={i}>
                        <ProjectCard
                            Card={p}
                            isMobile={false}
                            setShowCard={setShowCard}
                            setSelectedProject={setSelectedProject}
                        />
                    </AnimatedComponent>
                ))}

                {selectedProject && 
                    <AnimatedComponent>
                        <ProjectModal project={selectedProject} isOpen={showCard} />
                    </AnimatedComponent>
                }
            </div>
        </div>
    )
}

export default Portfolio;




