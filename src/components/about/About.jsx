import React from 'react';
import './about.css';
import AboutImg from "../../assets/image/portf2.jpeg";
import Info from './Info';
import './about.css';
import CvImg from '../../assets/cv/cv.pdf';
import { GrLinkBottom } from "react-icons/gr"


const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className='section_title'>About Me</h2>
      <span className="section_subtitle">My Introduction</span>

      <div className="about_container container grid">
        <img src={AboutImg} alt='' className='about_img' />

        <div className="about_data">
          <Info />

          <p className="about_description">
            Frontend web developer, I create web pages with UI/UX user interface, I love my job and enjoy what I do

          </p>

          <a download="" href={CvImg} className='button button--flex'>Download CV
            <GrLinkBottom />
          </a>
        </div>
      </div>
    </section>
  )
}

export default About