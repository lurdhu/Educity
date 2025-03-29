import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Testimonials() {
    return (
        <>
            <div className='container  mx-auto px-4'>
                <div className='p-10'>
                    <h3 className='uppercase text-base font-bold text-blue-800 mb-2 text-center'> Testimonials </h3>
                    <h4 className='text-3xl font-bold text-center'> What Student Says </h4>

                    <div className='flex justify-between items-center max-w-5xl mx-auto mt-24'>
                        <span className='bg-blue-800 p-2 rounded-full px-3 cursor-pointer'><FontAwesomeIcon className='text-white' icon={faArrowLeft} /></span>
                        <div className='flex gap-x-7 px-6'>
                        <div className='flex flex-col p-10 rounded-lg shadow-xl gap-y-5'>
                            <div className='flex gap-x-3 items-center'>
                                <div className=''>
                                    <img src="src/assets/media/user-1.png" className='w-16 h-16 rounded-full border-4 border-blue-700' alt="" />
                                </div>
                                <div>
                                    <p className='text-blue-700 font-bold'>Emily Williams</p>
                                    <p className='text-[#676767]'>Edusity, USA</p>
                                </div>
                            </div>
                            <div className=''>
                                <p className='text-sm font-medium text-[#676767]'>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made.
                                     The supportive community, state-of-the-art facilities, and commitment to academic excellence
                                      have truly exceeded my expectations.</p>
                            </div>
                        </div>
                        <div className='flex flex-col p-10 rounded-lg shadow-lg gap-y-5'>
                            <div className='flex gap-x-3 items-center'>
                                <div className=''>
                                    <img src="src/assets/media/user-1.png" className='w-16 h-16 rounded-full border-4 border-blue-700' alt="" />
                                </div>
                                <div>
                                    <p className='text-blue-700 font-bold'>William Jackson</p>
                                    <p className='text-[#676767]'>Edusity, USA</p>
                                </div>
                            </div>
                            <div>
                                <p className='text-sm font-medium text-[#676767]'>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made.
                                     The supportive community, state-of-the-art facilities, and commitment to academic excellence
                                      have truly exceeded my expectations.</p>
                            </div>
                        </div>
                        
                        </div>
                        <span className='bg-blue-800 p-2 rounded-full px-3 cursor-pointer'><FontAwesomeIcon className='text-white' icon={faArrowRight} /></span>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonials