import React from 'react'
import './Footer.css'
import logo2 from '../../assets/logo2.png'
import user_icon from '../../assets/user_icon.svg'
const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={logo2} alt="" />
                    <p>I am a beginner frontend developer with a strong foundation in HTML, CSS, and JavaScript, and I’m currently expanding my skills in React and responsive web design.</p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user_icon} alt="" />
                        <input type="email" placeholder='Enter email' />
                    </div>
                    <div className="footer-subscribe"><p>Subscribe </p></div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-left">© 2025 NItin Tanwar. All rights</p>
                <div className="footer-bottom-right">
                    <p>Term of services</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </div>
            </div>

        </div >
    )
}

export default Footer
