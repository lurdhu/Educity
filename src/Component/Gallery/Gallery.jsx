import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'; 

function Gallery() {
    return (
        <>
            <div className='container mx-auto px-4' id='campus'>
                <div className='p-10'>
                    <h3 className='uppercase text-base font-bold text-blue-800 mb-2 text-center'> Gallery </h3>
                    <h4 className='text-3xl font-bold text-center'>Campus Photos </h4>
                    <div className='flex gap-x-7 gap-y-5 max-w-5xl mx-auto mt-14 '>
                        <div className='overflow-hidden rounded-md'>
                            <img className='w-full hover:scale-110 transition-all duration-300 ' src="src/assets/media/gallery-1.png" alt="" />
                        </div>
                        <div className='overflow-hidden rounded-md'>
                            <img className='w-full hover:scale-110 transition-all duration-300 '  src="src/assets/media/gallery-2.png" alt="" />
                        </div>
                        <div className='overflow-hidden rounded-md'>
                            <img className='w-full hover:scale-110 transition-all duration-300 ' src="src/assets/media/gallery-3.png" alt="" />
                        </div>
                        <div className='overflow-hidden rounded-md'>
                            <img className='w-full hover:scale-110 transition-all duration-300 ' src="src/assets/media/gallery-4.png" alt="" />
                        </div>
                    </div>
                    <div className='mt-10 text-center'>
                        <button className='bg-blue-800 text-white py-3 px-5 rounded-3xl'> See more here <span className='ml-1 pt-1'><FontAwesomeIcon className='text-white' icon={faArrowRightLong} /></span> </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Gallery