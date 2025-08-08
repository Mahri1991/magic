import React, {useRef} from 'react';
import './Testimonials.css'
import arrow_left from '../../assets/arrow_left.png'
import arrow_right from '../../assets/arrow_right.png'
import user_1 from '../../assets/user_1.png'
import user_2 from '../../assets/user_2.png'
import user_3 from '../../assets/user_3.png'
import user_4 from '../../assets/user_4.png'


const Testimonials = () => {

  const slider = useRef();
  let tx = 0;

const slideForward = ()=>{
      if(tx > -50){
        tx -=25;
      }
      if (slider.current){
      slider.current.style.transform = `translateX(${tx}%)`;
      };
}
const slideBackward = ()=>{
  if(tx < 0){
        tx +=25;
      }
      if (slider.current){
      slider.current.style.transform = `translateX(${tx}%)`;
      };
    }
      

  return (
    <div className='testimonials'>
      <img src={arrow_left} alt="" className='left-btn' onClick=
      {slideForward}/>
      <img src={arrow_right} alt="" className='right-btn' onClick=
      {slideBackward}/>
      <div className="slider" >
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Jenifer Eniston</h3>
                  <span>Actrees, USA</span>
                </div>
              </div>
              <p> Iam absolutely thrilled with my expirience on this 
                magical organization!The quality of mystical 
          and professional works of psychics exceeded my expections.
           Brilliant servise what helped me return for life. 
          Highly recommend!
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Jenifer Eniston</h3>
                  <span>Actrees, USA</span>
                </div>
              </div>
              <p> Iam absolutely thrilled with my expirience on this 
                magical organization!The quality of mystical 
          and professional works of psychics exceeded my expections.
           Brilliant servise what helped me return for life. 
          Highly recommend!
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Jenifer Lopez</h3>
                  <span>Actrees, USA</span>
                </div>
              </div>
              <p> Iam absolutely thrilled with my expirience on this 
                magical organization!The quality of mystical 
          and professional works of psychics exceeded my expections.
           Brilliant servise what helped me return for life. 
          Highly recommend!
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Justin Trumph</h3>
                  <span>Football player, Italy</span>
                </div>
              </div>
              <p> Iam absolutely thrilled with my expirience on this 
                magical organization!The quality of mystical 
          and professional works of psychics exceeded my expections.
           Brilliant servise what helped me return for life. 
          Highly recommend!
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Testimonials;
