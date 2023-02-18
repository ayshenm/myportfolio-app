import React from 'react';
import './footer.css';
import logoImg from '../../assets/logo.png';
import { GrFacebookOption,GrGithub,GrLinkedinOption,GrInstagram } from "react-icons/gr";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_container container">
                <a href='index.html' className='nav_logo_footer'>
                <img src={logoImg} alt=''/>
                </a>

                <ul className="footer_list">
                    <li>
                        <a href="#about" className="footer_link">About</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer_link">Portfolio</a>
                    </li>

                    <li>
                        <a href="#services" className="footer_link">Services</a>
                    </li>

                </ul>

                <div className="footer_social">
                    <a href='https://www.facebook.com/melan.xolik.39' className="footer_social_icon" target="blank">
                        <GrFacebookOption />
                    </a>
                    <a href='https://github.com/ayshenm' className="footer_social_icon" target="blank">
                        <GrGithub />
                    </a>
                    <a href='https://www.linkedin.com/in/ayshen-mirzayeva-462077167/' className="footer_social_icon" target="blank">
                        <GrLinkedinOption />
                    </a>
                    <a href='https://www.instagram.com/_ayisha_13/' className="footer_social_icon" target="blank">
                        <GrInstagram />
                    </a>
                </div>
                <span className="footer_copy">&#169; <a href='https://www.linkedin.com/in/ayshen-mirzayeva-462077167/'>Ayisha Mirza</a> All rigths reserved</span>
            </div>
        </footer>
    )
}

export default Footer