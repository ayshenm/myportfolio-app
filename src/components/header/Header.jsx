import React from 'react';
import './header.css';
import { IoCodeSlashSharp } from "react-icons/io5";
import {AiOutlineClose} from "react-icons/ai";
import {AiOutlineWindows} from "react-icons/ai";
import { useState } from 'react';

const Header = () => {
   /*==============TOGGLE MENU===============================*/
   const[Toggle,showMenu] = useState(false);

  return (
    <header className="header">
        <nav className="nav container">
            <a href='index.html' className='nav_logo'>
            <IoCodeSlashSharp/>
            </a>

            <div className={Toggle ? "nav_menu show_menu" : "nav_menu"}>
                <ul className="nav_list grid">
                    <li className="nav_item">
                       <a href ="#home" className="nav_link active-link">Home</a>
                    </li>
                    <li className="nav_item">
                       <a href ="#about" className="nav_link"> About</a>
                    </li>
                    <li className="nav_item">
                       <a href ="#skill" className="nav_link">Skills</a>
                    </li>
                    <li className="nav_item">
                       <a href ="#services" className="nav_link">Services</a>
                    </li>
                    <li className="nav_item">
                       <a href="#project" className="nav_link">Portfolio</a>
                    </li>
                    <li className="nav_item">
                       <a href ="#contact" className="nav_link">Contact</a>
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