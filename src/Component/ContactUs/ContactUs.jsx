import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneVolume, faLocationDot, faEnvelopeOpen,faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

function ContactUs() {
    return (
        <>
            <div className='container  mx-auto px-4'>
                <div className='p-10'>
                    <h3 className='uppercase text-base font-bold text-blue-800 mb-2 text-center'> Contact Us </h3>
                    <h4 className='text-3xl font-bold text-center'> Get In Touch </h4>

                    <div className='max-w-5xl mx-auto mt-24'>
                        <div className='flex justify-between gap-x-30'>
                            <div className='w-1/2 flex flex-col gap-3'>
                                <p className='text-black text-xl font-bold'>Send us a Message <span className='text-yellow-600 rounded-full cursor-pointer'><FontAwesomeIcon icon={faEnvelopeOpen} /></span></p>
                                <p className='text-[#676767] font-medium max-w-md'>Feel free to reach out through contact form or find our contact information below.
                                    Your feedback, questions, and suggestions are important to us as we strive to provide
                                    exceptional service to our university community.
                                </p>
                                <div className='flex gap-5 items-center mt-3'>
                                    <span className='text-blue-800 rounded-full cursor-pointer'><FontAwesomeIcon className='text-2xl' icon={faEnvelope} /></span>
                                    <a className='text-[#676767]' href="mailto:Contact@GreatStack.dev">Contact@GreatStack.dev</a>
                                </div>
                                <div className='flex gap-5 items-center'>
                                    <span className='text-blue-800 rounded-full w-4 cursor-pointer'><FontAwesomeIcon className='text-2xl' icon={faPhoneVolume} /></span>
                                    <a className='text-[#676767]' href="tel:+11234567890">+1 123-456-7890</a>
                                </div>
                                <div className='flex gap-5 items-center'>
                                    <span className='text-blue-800 rounded-full w-4 cursor-pointer'><FontAwesomeIcon className='text-2xl' icon={faLocationDot} /></span>
                                    <p className='text-[#676767] max-w-64'>77 Massachusetts Ave, Cambridge
                                        MA 02139, United States
                                    </p>
                                </div>
                            </div>
                            <div className='w-1/2 flex flex-col gap-3 justify-start'>
                                <form className='flex flex-col gap-3'>
                                    <div className='flex flex-col'>
                                        <label className='text-[#676767] text-base font-medium mb-1'>Your Name</label>
                                        <input className='bg-[#ebecfe] text-sm text-[#676767] p-3 outline-none rounded-sm' type="text" placeholder='Enter your name' required/>
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='text-[#676767] text-base font-medium mb-1'>Phone Number</label>
                                        <input className='bg-[#ebecfe] text-sm text-[#676767] p-3 outline-none rounded-sm' type="number" placeholder='Enter your mobile number' required />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='text-[#676767] text-base font-medium mb-1'>Your Email</label>
                                        <input className='bg-[#ebecfe] text-sm text-[#676767] p-3 outline-none rounded-sm' type="email" placeholder='Enter your email Id' required/>
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='text-[#676767] text-base font-medium mb-1'>Write Your message here</label>
                                        <textarea className='bg-[#ebecfe] text-sm text-[#676767] p-3 outline-none rounded-sm' type="text" placeholder='Enter your message' rows={4} cols={4} />
                                    </div>
                                    <div className='mt-5 text-center mr-auto'>
                                        <button className='bg-blue-800 text-white py-3 px-5 rounded-3xl'> Submit here <span className='ml-1 pt-1'><FontAwesomeIcon className='text-white' icon={faArrowRightLong} /></span> </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactUs