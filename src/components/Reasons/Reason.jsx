import React from 'react';
import './Reason.css';
import image1 from'../../assets/image1.png';
import image2 from'../../assets/image2.png';
import image3 from'../../assets/image3.png';
import image4 from'../../assets/image4.png';
import nb from'../../assets/nb.png';
import adidas from '../../assets/adidas.png';
import nike from '../../assets/nike.png';
import tick from '../../assets/tick.png';

const Reason = () => {
  return (
    <div className='Reasons' id='reasons'>
      <div className="left-r">
        <img src={image1} alt="Image 1" />
        <img src={image2} alt="Image 2" />
        <img src={image3} alt="Image 3" />
        <img src={image4} alt="Image 4" />
      </div>
      
      <div className="right-r">
        <span>Some reasons</span>
        <div>
          <span className='stroke-test'>why</span>
          <span> choose us?</span>
        </div>
        <div className='reasons-list'>
          <div>
            <img src={tick} alt="Tick" /><span>OVER 140+ EXPERT COACHS</span>
          </div>
          <div>
            <img src={tick} alt="Tick" /><span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
          </div>
          <div>
            <img src={tick} alt="Tick" /><span>1 FREE PROGRAM FOR NEW MEMBER</span>
          </div>
          <div>
            <img src={tick} alt="Tick" /><span>RELIABLE PARTNERS</span>
          </div>
        </div>
        <span style={{ color: 'var(--gray)', fontWeight: 'normal' }}>OUR PARTNERS</span>
        <div className='partners'>
          <img src={nb} alt="New Balance" />
          <img src={adidas} alt="Adidas" />
          <img src={nike} alt="Nike" />
        </div>
      </div>
    </div>
  )
}

export default Reason;
