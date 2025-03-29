import React from 'react'
import Navbar from '../Navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'; 


function Hero() {
    return (
        <>
            <Navbar />
            <div className="bg-[#08003acd] bg-[url('../src/assets/media/hero-wMB5D_Q0.png')] opacity-90 bg-cover bg-center bg-blend-overlay h-screen w-full flex justify-center items-center relative">
                <div className='p-5 flex flex-col gap-y-2 max-w-4xl mx-auto text-center container'>
                    <div className='max-w-3xl mx-auto'>
                        <h2 className='text-white text-6xl font-semibold leading-tight'>We Ensure better education for a better  world
                        </h2>
                    </div>
                    <p className='text-white text-base max-w-2xl mx-auto'>Our cutting-edge curriculum is designed to empower students with the knowledge,
                        skills, and experiences needed to excel in the dynamic field of education</p>
                    <div className=''>
                        <button className='bg-white p-3 px-5 rounded-full mt-3 text-black'>Explore More <span className='ml-1 pt-1'><FontAwesomeIcon className='text-black' icon={faArrowRightLong} /></span></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;