import React, { useEffect, useState } from 'react';


function Navbar() {
const [sticky,setSticky] = useState(false);

useEffect(()=>{
    window.addEventListener('scroll',()=>{
        window.scrollY > 50 ? setSticky(true) : setSticky (false);
    })
},[]);

    return (
        <>
          <nav className={`${sticky ? 'bg-blue-800 transition-all duration-300' : ''} px-20 z-50 w-full fixed`}>
                <div className='flex justify-between items-center p-3 pl-10 pr-10 container'>
                    <div className=''>
                        <img src="../src/assets/media/logo-original.png" alt="logo" className='h-10 w-32' />
                    </div>
                    <div>
                        <ul className='flex gap-8 items-center'>
                            <li className='cursor-pointer text-white'>Home</li>
                            <li className='cursor-pointer text-white'>Program</li>
                            <li className='cursor-pointer text-white'>About Us</li>
                            <li className='cursor-pointer text-white'>Campus</li>
                            <li className='cursor-pointer text-white'>Testimonials</li>
                            <li className='bg-white text-black rounded-full p-2 px-5 pb-3'>Contact Us</li>
                        </ul>
                    </div>
                </div>
               
            </nav>
            
        </>
    )
}



export default Navbar;