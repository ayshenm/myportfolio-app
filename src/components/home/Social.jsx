import React from 'react';
import { GrFacebookOption,GrGithub,GrLinkedinOption,GrInstagram } from "react-icons/gr";

const Social = () => {
  return (
    <div className="home_social">
        <a href='https://www.facebook.com/melan.xolik.39' className="home_social_icon" target="blank">
            <GrFacebookOption />
        </a>
        <a href='https://github.com/ayshenm' className="home_social_icon" target="blank">
            <GrGithub />
        </a>
        <a href='https://www.linkedin.com/in/ayisha-mirza-462077167/' className="home_social_icon" target="blank">
            <GrLinkedinOption />
        </a>
        <a href='https://www.instagram.com/_ayisha_13/' className="home_social_icon" target="blank">
            <GrInstagram />
        </a>
       
    </div>
  )
}

export default Social