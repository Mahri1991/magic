import React from 'react';
import './Hero.css'
import arrow_left from "../../assets/arrow_left.png"
const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
      <h1>We Ensure better magic for better world</h1>
      <p>Our supernatural approach will help you see your problem and find a magical solution to make your
        dream come true. If you dream of a wedding, career, money, finding your soulmate, our specialist will help
        achieve real success in all areas of life</p>
        <button className='btn'>Explore more <img src={arrow_left} alt=""/></button>
      </div>
    </div>
  )
}

export default Hero;
