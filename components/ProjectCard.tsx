"use client"
import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { PortfolioProjectsProps } from '@/types/types';
import Link from 'next/link';

interface CardProps {
    Card: PortfolioProjectsProps,
    isMobile: boolean,
    setShowCard: (show: boolean) => void,
    setSelectedProject: (project: PortfolioProjectsProps | null) => void
};

const ProjectCard = ({Card, isMobile, setShowCard, setSelectedProject} : CardProps) => {
    return (
        isMobile ? (
            <div
                className='border-solid border-black border-4 rounded-2xl p-7 max-w-lg max-h-96 shadow-xl cursor-pointer hover:shadow-2xl hover:scale-105 duration-200 block'
                onClick={() => {setShowCard(true); setSelectedProject(Card)}}
            >
                <h4 className='text-black-1 font-extrabold text-3xl mb-2'>{Card.title}</h4>
                <h2 className='text-grey-1 text-xl font-semibold mb-2'>{Card.description}</h2>
                <div className='flex flex-wrap mb-2'>
                    {Card?.tags?.map((tag) => (
                        <span key={tag.id} className={`${tag.id % 2 === 0 ? "bg-cyan-1" : "bg-tomato-1"} font-bold px-2 py-1 rounded-lg mr-2 text-white mb-2`}>{tag.label}</span>
                    ))}
                </div>
                <div className='inline-flex items-center border-b-2 border-solid border-black cursor-pointer text-lg font-bold'>
                    <span className='hover:mr-2 duration-200'>View</span> 
                    <FaArrowRight className='ml-1' />
                </div>
            </div>
        ) : (   
            <Link
                href={`/portfolio/${Card?.id}`}
                className='border-solid border-black border-4 rounded-2xl p-7 max-w-lg max-h-96 shadow-xl cursor-pointer hover:shadow-2xl hover:scale-105 duration-200 block'
            >
                <h4 className='text-black-1 font-extrabold text-3xl mb-2'>{Card.title}</h4>
                <h2 className='text-grey-1 text-xl font-medium mb-2'>{Card.description?.length > 100 ? `${Card?.description?.substring(0, 100)}...` : Card?.description}</h2>
                <div className='flex flex-wrap mb-2'>
                    {Card?.tags?.map((tag) => (
                        <span key={tag.id} className={`${tag.id % 2 === 0 ? "bg-cyan-1" : "bg-tomato-1"} font-bold px-2 py-1 rounded-lg mr-2 text-white mb-2`}>{tag.label}</span>
                    ))}
                </div>
                <div className='inline-flex items-center border-b-2 border-solid border-black cursor-pointer text-lg font-bold'>
                    <span className='hover:mr-2 duration-200'>View</span> 
                    <FaArrowRight className='ml-1' />
                </div>
            </Link>
        )
    )
}

export default ProjectCard;