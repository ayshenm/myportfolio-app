import React from 'react';
import './about.css';
import AboutImg from "../../assets/image/portf1.jpg.jpeg";
/*cv*/

const About = () => {
  return (
    <section className="about section" id="about">
        <h2 className='section_title'>About Me</h2>
        <span className="section_subtitle">My Introduction</span>

        <div className="about_container container grid">
            <img src={AboutImg} alt='' className='about_img'/>

        </div>

    </section>
  )
}

export default About