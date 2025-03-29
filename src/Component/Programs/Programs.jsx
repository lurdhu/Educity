import React from 'react'

function Programs() {
    return (
        <>
            <div className='container mx-auto px-4' id="programs">
                <div className='p-10'>
                    <h3 className=' uppercase text-base font-bold text-blue-800 mb-2 text-center'>Our Program </h3>
                    <h4 className='text-3xl font-bold text-[#000f38] text-center'> What We Offer</h4>

                    <div className='flex gap-5 gap-x-8 mt-20 max-w-5xl mx-auto pb-14'>
                        <div className='relative flex justify-center items-center'>
                            <div className='relative hover:bg-blue-300'>
                                <img className='rounded-lg' src="src/assets/media/program-1.png" alt="" />
                            </div>
                            <div className='absolute bottom-0 z-10 opacity-0 top-0 left-0 right-0 rounded-md hover:opacity-100 pt-64 hover:pt-0 duration-500 cursor-pointer hover:bg-[#000f984d] flex flex-col justify-center items-center transition-all'>
                                <img className='w-20 h-20' src="src/assets/media/pro-1.png" alt="" />
                                <p className='text-lg font-semibold text-white z-20'> Graduation degree </p>
                            </div>
                        </div>
                        <div className='relative flex justify-center items-center'>
                            <div className='relative hover:bg-blue-300'>
                                <img className='rounded-lg' src="src/assets/media/program-2.png" alt="" />
                            </div>
                            <div className='absolute bottom-0 z-10 opacity-0 top-0 left-0 right-0 rounded-md hover:opacity-100 pt-64 hover:pt-0 duration-500 cursor-pointer hover:bg-[#000f984d] flex flex-col justify-center items-center transition-all'>
                                <img className='w-20 h-20' src="src/assets/media/pro-2.png" alt="" />
                                <p className='text-lg font-semibold text-white z-20'> Masters degree </p>
                            </div>
                        </div>
                        <div className='relative flex justify-center items-center'>
                            <div className='relative hover:bg-blue-300'>
                                <img className='rounded-lg' src="src/assets/media/program-3.png" alt="" />
                            </div>
                            <div className='absolute bottom-0 z-10 opacity-0 top-0 left-0 right-0 rounded-md hover:opacity-100 pt-64 hover:pt-0 duration-500 cursor-pointer hover:bg-[#000f984d] flex flex-col justify-center items-center transition-all'>
                                <img className='w-20 h-20' src="src/assets/media/pro-3.png" alt="" />
                                <p className='text-lg font-semibold text-white z-20'> Post Graduation </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Programs; 