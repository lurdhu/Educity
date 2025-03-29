import { useState } from 'react'
import './App.css'
import Navbar from './Component/Navbar/Navbar';
import Hero from './Component/Hero/Hero';
import Programs from './Component/Programs/Programs';
import About from './Component/About/About';
import Gallery from './Component/Gallery/Gallery';
import Testimonials from './Component/Testimonials/Testimonials';
import ContactUs from './Component/ContactUs/ContactUs';
import Footer from './Component/Footer/Footer';

function App() {
  const [count] = useState(0);

  return (
    <>
      <div className='bg-gray-100'>
          <Hero />
          {/* <Navbar /> */}
          <Programs />
          <About />
          <Gallery />
          <Testimonials />
          <ContactUs/>
          <Footer />
      </div>
     
    </>
  )
}

export default App
