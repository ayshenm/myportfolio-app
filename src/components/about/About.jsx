import React from 'react';
import './about.css';
import AboutImg from "../../assets/image/portf2.jpeg";
import Info from './Info';
import { FiFile } from "react-icons/fi";
import './about.css';
/*cv*/

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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur aut praesentium sapiente laudantium laborum nesciunt nobis nulla a, fugit atque deleniti, molestiae sint doloremque soluta.</p>

          <a download="" href="{*/cv qoyacam/*}" className='button button--flex'>Download CV
            <FiFile />
          </a>
        </div>
      </div>
    </section>
  )
}

export default About