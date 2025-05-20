import React from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg'
import profile8 from '../../assets/profile8.png'

const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile8} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p> I am a beginner frontend developer with a strong foundation in HTML, CSS, and JavaScript, and I’m currently expanding my skills in React and responsive web design. </p>
                        <p>My passion in frontend development is not only about writing code, I find joy in solving problems, improving usability, and continuously learning new tools</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "50%" }} /></div>
                        <div className="about-skill"><p>React JS</p><hr style={{ width: "70%" }} /></div>
                        <div className="about-skill"><p>JavaScript</p><hr style={{ width: "60%" }} /></div>
                        <div className="about-skill"><p>Next JS</p><hr style={{ width: "50%" }} /></div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>5+</h1>
                    <p>PROJECTS BUILT</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>100+</h1>
                    <p>HOURS OF LEARNING</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>3+</h1>
                    <p>TECHNOLOGIES LEARNED</p>
                </div>
            </div>
        </div>
    );
}

export default About;