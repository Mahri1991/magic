import React from 'react';
import './Magic.css'
import gallery1 from '../../assets/gallery1.png'
import gallery2 from '../../assets/gallery2.png'
import gallery3 from '../../assets/gallery3.png'
import gallery4 from '../../assets/gallery4.png'
import next_icon from '../../assets/next_icon.png'


const Magic = () => {
  return (
    <div className="magic">
      <div className="gallery">
        <img src={gallery1}alt="" />
        <img src={gallery2}alt="" />
        <img src={gallery3}alt="" />
        <img src={gallery4}alt="" />
        
      </div>
      <button className='btn dark-btn'>See more here <img src={next_icon}alt="" /></button>
    </div>
  );
}

export default Magic;

