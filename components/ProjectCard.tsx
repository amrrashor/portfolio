import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { FaA } from 'react-icons/fa6';
const ProjectCard = ({id}: {id:number}) => {
    const isEven = id % 2 === 0;
    return (
        <div className='border-solid border-black border-4 rounded-2xl p-7 max-w-lg max-h-96 m-5 shadow-xl'>
                <h4 className='text-black-1 font-extrabold text-3xl mb-2'>Project Name</h4>
                <h2 className='text-grey-1 text-xl font-semibold mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, voluptas? Id eos iste laborum</h2>
                <div className='flex flex-wrap mb-2'>
                    <span className={`${isEven ? "bg-cyan-1" : "bg-tomato-1"} font-bold border-2 px-2 py-1 rounded-lg mr-2 text-white mb-2`}>#tags</span>
                </div>
                <button className='flex items-center border-b-2 border-solid border-black cursor-pointer text-lg font-bold'>
                    <span className='hover:mr-2 duration-200'>View</span> 
                    <FaArrowRight className='ml-1' />
                </button>
        </div>
    )
}

export default ProjectCard