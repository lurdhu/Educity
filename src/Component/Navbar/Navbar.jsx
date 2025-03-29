import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';


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
                    <img src="src/assets/media/logo-original.png" alt="logo" className="h-10 w-32" />
                    </div>
                    <div>
                        <ul className='flex gap-8 items-center'>
                            <li className='cursor-pointer text-white'><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
                            <li className='cursor-pointer text-white'><Link to='programs' smooth={true} offset={-70} duration={500}>Program</Link></li>
                            <li className='cursor-pointer text-white'><Link to='aboutus' smooth={true} offset={-70} duration={500}>About Us</Link></li>
                            <li className='cursor-pointer text-white'><Link to='campus' smooth={true} offset={-70} duration={500}>Campus</Link></li>
                            <li className='cursor-pointer text-white'><Link to='testimonials' smooth={true} offset={-70} duration={500}>Testimonials</Link></li>
                            <li className='bg-white text-black rounded-full p-2 px-5 pb-3'> <Link to='contactus' smooth={true} offset={-70} duration={500}>Contact Us</Link></li>
                        </ul>
                    </div>
                </div>
               
            </nav>
            
        </>
    )
}



export default Navbar;