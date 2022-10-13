import React from 'react';
import { GrLinkBottom} from "react-icons/gr"

const Data = () => {
  return (
    <div className="home_data">
        <h1 className="home_title">Ayisha Mirza</h1>
        <h3 className="home_subtitle">Frontend Web Developer</h3>
        <p className="home_description">hello:) I'm frontend developer</p>
        <a href=''className='button button_flex'>
            dowloland  CV
            <GrLinkBottom />
        </a>
    </div>
  );
};

export default Data