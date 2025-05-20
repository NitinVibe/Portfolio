import React from 'react'
import './Hero.css'
import profile from '../../assets/profile8.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
    return (
        <div id='home' className='hero'>
            <img src={profile} alt="" />
            <h1><span>I'm Nitin Tanwar,</span> frontend developer .</h1>
            <p>I am a frontend developer from India, </p>
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
                <div className="hero-resume">My resume</div>
            </div>

        </div>
    )
}

export default Hero
