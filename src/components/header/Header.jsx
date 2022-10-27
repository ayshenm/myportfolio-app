import React from 'react';
import './header.css';
import {AiOutlineClose} from "react-icons/ai";
import {AiOutlineWindows} from "react-icons/ai";
import { useState } from 'react';
import logoImg from '../../assets/logo.png';

const Header = () => {
   /*==============Change Background Header===============================*/
   window.addEventListener("scroll", function () {
      const header = document.querySelector(".header");
      if (this.scrollY >= 80) header.classList.add
      ("header-scroll");
      else header.classList.remove("header-scroll");
    });
   /*==============TOGGLE MENU===============================*/
   const[Toggle,showMenu] = useState(false);
   const[activeNav, setActiveNav] = useState("#home")

  return (
    <header className="header">
        <nav className="nav container">
            <a href='index.html' className='nav_logo'>
            <img src={logoImg} alt=''/>
            </a>

            <div className={Toggle ? "nav_menu show_menu" : "nav_menu"}>
                <ul className="nav_list grid">
                    <li className="nav_item">
                       <a href ="#home" onClick={() =>
                     setActiveNav('#home')} className={activeNav === "#home" ? "nav_link active-link" :
                     "nav_link"}>Home</a>
                    </li>
                    <li className="nav_item">
                       <a href ="#about"onClick={() =>
                     setActiveNav('#about')} className={activeNav === "#about" ? "nav_link active-link" :
                     "nav_link"}> About</a>
                    </li>
                    <li className="nav_item">
                       <a href ="#skill" onClick={() =>
                     setActiveNav('#skill')} className={activeNav === "#skill" ? "nav_link active-link" :
                     "nav_link"}>Skills</a>
                    </li>
                    <li className="nav_item">
                       <a href ="#services" onClick={() =>
                     setActiveNav('#services')} className={activeNav === "#services" ? "nav_link active-link" :
                     "nav_link"}>Services</a>
                    </li>
                    <li className="nav_item">
                       <a href="#project" onClick={() =>
                     setActiveNav('#project')} className={activeNav === "#project" ? "nav_link active-link" :
                     "nav_link"}>Portfolio</a>
                    </li>
                    <li className="nav_item">
                       <a href ="#contact" onClick={() =>
                     setActiveNav('#contact')} className={activeNav === "#contact" ? "nav_link active-link" :
                     "nav_link"}>Contact</a>
                    </li>
                </ul>
                <div className="nav_close" onClick={() => showMenu(!Toggle)}>
                <AiOutlineClose />
                </div>
            </div>

            <div className="toggle_nav" onClick={ () => showMenu 
               (!Toggle) }>
                <AiOutlineWindows />
            </div>

        </nav>
    </header>
  )
}

export default Header