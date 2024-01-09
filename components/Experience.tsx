import React from 'react';
import { GoPerson } from "react-icons/go";


const Experience = () => {
    return (
        <section className='h-full primary-2  pt-[240px] pb-[240px] '>
            <div className='relative overflow-visible min-h-[400px] max-w-[1300px] mx-auto px-[50px] flex justify-between flex-col md:flex-row'>
                <div className=' text-center md:text-left mb-[25px] md:mb-0 w-full md:sticky top-0 text-white md:text-[52px] text-[30px] font-bold md:leading-[1.15em]'>
                    <div className='w-full'>Take a look at my<br /><span className='gradient-1 px-[4px]'>past experience</span></div>
                    <button className='w-full mt-[35px] flex hover:bg-[#3898ec] hover:text-white duration-200 bg-white border-1 text-primary-1 text-center rounded-[16px] px-[38px] py-[26px] text-[18px] font-bold leading-[1.1em]'>
                        <GoPerson className='mr-[7px]' />
                        See full resume
                    </button>
                </div>

                <div className='card'>
                    <div className='primary-1 max-w-[625px] rounded-[24px]  mb-[30px]'>
                        <div className='py-[35px] px-[35px] text-[24px] font-bold leading-[1.083em] text-primary-1'>Jan 2023 - Present</div>
                        <div className='primary-2 w-full h-[3px]' />
                        <div className='py-[35px] px-[35px]'>
                            <h4 className='text-[28px] font-bold leading-[1.4em] text-primary-1 mb-[8px]'>Mobile Product Designer</h4>
                            <p className='text-[18px] font-medium text-primary-1'>Vel facilisis volutpat est velit egestas dui. Urna nec cidu praesent semper feugiat. Vulputate ut pharetra sit.</p>
                        </div>
                    </div>

                    <div className='primary-1 max-w-[625px] rounded-[24px]  mb-[30px] '>
                        <div className='py-[35px] px-[35px] text-[24px] font-bold leading-[1.083em] text-primary-1'>Jan 2023 - Present</div>
                        <div className='primary-2 w-full h-[3px]' />
                        <div className='py-[35px] px-[35px]'>
                            <h4 className='text-[28px] font-bold leading-[1.4em] text-primary-1 mb-[8px]'>Mobile Product Designer</h4>
                            <p className='text-[18px] font-medium text-primary-1'>Vel facilisis volutpat est velit egestas dui. Urna nec cidu praesent semper feugiat. Vulputate ut pharetra sit.</p>
                        </div>
                    </div>

                    <div className='primary-1 max-w-[625px] rounded-[24px]  mb-[30px]'>
                        <div className='py-[35px] px-[35px] text-[24px] font-bold leading-[1.083em] text-primary-1'>Jan 2023 - Present</div>
                        <div className='primary-2 w-full h-[3px]' />
                        <div className='py-[35px] px-[35px]'>
                            <h4 className='text-[28px] font-bold leading-[1.4em] text-primary-1 mb-[8px]'>Mobile Product Designer</h4>
                            <p className='text-[18px] font-medium text-primary-1'>Vel facilisis volutpat est velit egestas dui. Urna nec cidu praesent semper feugiat. Vulputate ut pharetra sit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience