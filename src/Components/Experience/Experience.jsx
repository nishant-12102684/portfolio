import React from 'react'
import './Experience.css'
import behind from '../../assets/behind.svg'

const Experience = () => {
  return (
    <div className='experience' id='experience'>
         <div className="experiences">
         <header className='title'>
                  <h2 style={{position:'relative'}}>Projects</h2>
                  <img src={behind} alt='' />
              </header> 
            <section className='col'>
              <div className='contents'>
                <div className="box">
                  <h4>1. A Café Website     </h4>
                  <h3>Tech: Web Application |Programming Languages: Bootstrap, JavaScript, HTML </h3>
                  <p style={{padding:'20px',fontSize:'20px'}}>
                  <li>Implemented essential features, including seamless order placement and booking functionality.  </li>
                  <li>Developed features for the application and created a new landing page to enhance customer experience. </li>
                  <li>Utilized JS to enable more convenient searching for menu items according to price budget filter. </li> 
                  <li>Incorporated various animations to elevate the overall user experience and engagement. </li></p>
                </div>
                <br/>
                <br/>
                <div className="box">
                  <h4>2. Phonebook Directory Management System</h4>
                  <h3>Tech: Skillsets: DSA | Programming Languages: C++ </h3>
                  <p style={{padding:'20px',fontSize:'20px'}}>
                    <li>Built a Project that stores contact details in a database that is managed by an administrator to adapt streamlined contact management and enhanced communication. </li>
                    <li> Upgraded code to make the operating error-free. </li>
                    <li>The system allows admin to Add, Delete , Update , Search contact information  </li>
                    </p>
                </div>
              </div>
            </section>
        </div> 
    </div>
  )
}

export default Experience