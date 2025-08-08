import React from 'react';
import './About.css';
import magic from '../../assets/magic.jpg'
import play_icon from '../../assets/play_icon.png'


const About = () => {
  return (
    <div className="about">
        <div className="left">
            <img src={magic} alt="" className='magic' />
            <img src={play_icon} alt="" className='play_icon' />
            </div>
        
        <div className="right">
      <h2> About our psychics and Astrology</h2>
      <h3>THE DREAMS ALWAYS COME TRUE</h3>
      <p>Embark on a transformative journey with our masters  magic works. 
        Our job is do your life better than your wish
        and help you with all problems in your life. 
         This organization is sacred space for truth,
         healing and transformation.
      </p>
      <p>
        Tarot Readings discover hidden truths, Clairovant sessions recieve messages from beyond, 
        Astrology  consultation understand your cosmic blueprint, Mediumship connect with loved ones who have passed.
        Shamans work with spirits of nature and act as a spiritual doctors.
      </p>
      <p>
        You did not arrive here by chance. The universe has whispered your name.
        step forward, and left the unseen become known. Sessions attuned to your soul's vibration.
        Initiated guides with deep spiritual gifts. 
      </p>
      
        </div>
    </div>
    
    
  );
}

export default About;
