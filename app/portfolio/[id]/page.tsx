import React from 'react'
import { PortfolioProjectsData } from '@/constants/constants'
import { notFound } from 'next/navigation'

const ProjectPage = ({params} : {params: {id: string}}) => {
    const project = PortfolioProjectsData.find(p => p.id.toString() === params.id)
    if (!project) notFound();
    
    return (
        <div> 
            <h1>{project.title}</h1>
            <p>{project.description}</p>
        </div>
    )
}

export default ProjectPage 