import React from 'react'
import './About.css'
import Author from '../../assets/Author.jpg'
import behind from '../../assets/behind.svg'


const About = () => {
  return (
    <div className='about' id='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={behind} alt='' />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={Author} alt='not here' />
        </div>
      <div className="about-right">
        <div className="about-para">
          <p>     I am Nishant Nalawade. I have honed my Web        
            development skills in ReactJS, Html, CSS. and have a good grasp
            on the backend technology such as NodeJS and ExpressJS.
          </p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default About