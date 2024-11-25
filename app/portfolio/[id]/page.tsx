'use client';
import React, {useEffect} from 'react'
import { PortfolioProjectsData } from '@/constants/constants'
import { notFound } from 'next/navigation'

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
        <div className='flex flex-col md:flex-row w-3/4 mx-auto'> 
            {/* left part */}       
            <div className='w-full h-full mr-10'>
                <h1>{project.title}</h1>
                <p>{project.description}</p>
            </div>

            {/* right part */}
            <div className='w-[700px] h-[400px] rounded-xl shadow-xl'>
                <img
                    className='w-full h-full object-contain rounded-xl'
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr5-FOOK0IFKFlS6N7CgdHSGvmLlnDJ9g1Cw&s" 
                    alt={project.title} 
                />
            </div>
        </div>
    )
}

export default ProjectPage 