import React, { useEffect } from 'react'
import './animation.css'
import AOS from 'aos'
import 'aos/dist/aos.css'


const App = () => {
  // Initialize AOS on the first render as we have set the dependency array as empty.
  useEffect(() => {
    AOS.init({
      duration: 2000
    })
  }, [])
  return (
    <div className="top">
      <h1 className='text-center'>Welcome to React Animation!👋</h1>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <h1 className='tag'>Fade</h1>
      <div className="animation" data-aos="fade-down"></div>
      <div className="animation" data-aos="fade-left"></div>
      <div className="animation" data-aos="fade-right"></div>
      <div className="animation" data-aos="fade-up"></div>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

      <h1 className='tag'>Flip</h1>

      <div className="animation" data-aos="flip-right"></div><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

      <h1 className='tag'>Zoom Animation</h1>

      <div className="animation" data-aos="zoom-in"></div>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </div>
  )
}

export default App