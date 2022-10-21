import React from 'react';
import  BackImg from '../../assets/image/backgr.jpg';

const Frontend = () => {
    return (
        <div className='backimg' style={{display: "flex", justifyContent:'center'}}>
        <img src={BackImg} alt='' className='about_img' />
      </div>
    )
}

export default Frontend