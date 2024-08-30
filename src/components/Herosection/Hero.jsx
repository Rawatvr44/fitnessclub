import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png';
import {motion} from 'framer-motion'

const Hero = () => {
  const transition={type:'spring',duration:3}
  const mobile=window.innerWidth<=768?true:false;

  return (
    <div className="hero">
      <div className="blur blur-h"></div>
      <div className="left-h">
        <Header />
        <div className="the-best-ad">
        <motion.div
      initial={{ left:mobile? "156px":"195px" }} // Corrected spelling and syntax
      animate={{ left: "8px" }} // Changed 'whileInVien' to 'animate'
      transition={{...transition,type:'tween'}} // Corrected spelling
    >
      {/* Your content goes here */}
    </motion.div>
          <span>The best fitness club in town</span>
        </div>
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape</span>
            <span>Your </span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
        </div>
        <div>
          <span>
            In here we will help you to shape and build your ideal body
          </span>
        </div>
        {/* Figures */}
        <div className="figures">
          <div>
            <span>+140</span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>+978</span>
            <span>members joined</span>
          </div>
          <div>
            <span>50</span>
            <span>fitness programs</span>
          </div>
        </div>

        {/* HERO BUTTONS */}
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>

        <motion.div 
        initial={{right:'-1rem'}}
        whileInView={{right:'4rem'}}
        transition={transition}
        className="heart-rate">
          <img src={Heart} alt="Heart" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>

        <img src={hero_image} alt="Hero" className="hero-img" />
        <motion.img 
           initial={{right:'15rem'}}
           whileInView={{right:'28rem'}}
           transition={transition}
        src={hero_image_back} alt="Hero Back" className="hero-image-back" />

        <motion.div
           initial={{right:'48rem'}}
           whileInView={{right:'37rem'}}
           transition={transition}
        className="calories">
          <img src={Calories} alt="Calories" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
