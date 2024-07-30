import React from 'react'
import './Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import Author from '../../assets/Author.jpg'
const Hero = () => {
    return (
        <div className='hero' id='home'>
            <img src={Author} alt='error while displaying image' />
            <h1><span>I'm Nishant Nalawade,</span> a Web Developer from India</h1>
            <p>I am a Full Stack Web Developer with expertise in MERN stack </p>
            <div className="hero-action" >
                <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
                <div className="hero-resume"><a href='https://drive.google.com/file/d/1bU0lHO9G4n5QET-AgJub1oXapDD7Kgj7/view?usp=sharing'>My Resume</a></div>
            </div>

        </div>
    )
}

export default Hero