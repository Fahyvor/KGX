import React from 'react'
import './index.css'
import kaaylogo from '../../assets/Logo.png'

const About = () => {
  return (
    <div className='about'>
        <a href='/'>
            <img src={kaaylogo} alt="Home" className='kaaylogo' />
        </a>
        <div className='about-writing'>
        <h1>About Us</h1>
        <p className='about-paragraph'>
            We are a Graphics Design firm<br></br>
            interested in delivering <br></br>High-Quality
            Graphical <br></br> Contents.
        </p>
        </div>
    </div>
  )
}

export default About