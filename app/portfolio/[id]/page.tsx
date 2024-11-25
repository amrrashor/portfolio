'use client';
import React, {useEffect} from 'react'
import { PortfolioProjectsData } from '@/constants/constants'
import { notFound } from 'next/navigation'
import { FaTools } from "react-icons/fa";
import AnimatedComponent from '@/components/AnimatedComponent';

const ProjectPage = ({params} : {params: {id: string}}) => {
    const project = PortfolioProjectsData.find(p => p.id.toString() === params.id);
    if (!project) notFound();
    
    useEffect(() => {
        document.title = `${project.title} | Portfolio`;
        return () => {
            document.title = "Amr Ashour | Portfolio";
        }
    }, []);

    return (
        <div className='flex flex-col md:flex-row w-3/4 mx-auto mt-10'> 
            {/* left part */}       
            <AnimatedComponent className='w-full h-full md:mr-10 mb-10 md:mb-0 text-center'>
                <h1 className='text-4xl font-bold'>{project.title}</h1>
                <p className='text-lg mt-5'>{project.description}</p>
                <div className='mt-8'>
                    <h4 className='text-2xl font-bold'>Technologies i used in this project <FaTools className='ml-2 inline'/></h4>
                    <div className='flex flex-wrap mt-5'>
                        {project?.tags?.map((t) => (
                            <span key={t.id} className={`text-sm font-medium p-2 rounded-xl mr-2 mb-2 text-white ${t.id % 2 === 0 ? 'bg-cyan-1' : 'bg-tomato-1'}`}>{t.label}</span>
                        ))}
                    </div>
                </div>
                <a 
                    className='inline-block hover:bg-tomato-1 hover:text-white duration-300 mt-7 border border-solid border-black hover:border-tomato-1 rounded-xl px-3 py-2 text-center hover:scale-[0.998]' 
                    href={project?.link} 
                    target='blank'
                >
                    Visit Website
                </a>
            </AnimatedComponent>

            {/* right part */}
            <AnimatedComponent className='w-full h-full rounded-xl shadow-xl' delay={0.5}>
                <img
                    className='w-full h-full object-cover rounded-xl'
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr5-FOOK0IFKFlS6N7CgdHSGvmLlnDJ9g1Cw&s" 
                    alt={project.title} 
                />
            </AnimatedComponent>
        </div>
    )
}

export default ProjectPage 