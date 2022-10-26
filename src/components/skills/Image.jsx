import React from 'react';
import  BackImg from '../../assets/image/backgr.jpg';

const Image = () => {
    return (
        <div className='backimg' style={{display: "flex", justifyContent:'center'}}>
        <img src={BackImg} alt='' className='about_img' />
      </div>
    )
}

export default Image