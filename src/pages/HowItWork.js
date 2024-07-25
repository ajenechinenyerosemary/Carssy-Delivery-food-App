import React from 'react';
import './HowItWork.css';
import assets from '../assets/assets';

const HowItWork = () => {
  return (
    <div className="how-it-work">
      <h1>HOW IT WORKS</h1>
      <h2>Super Simple!</h2>
      <div className="steps-and-image">
        <div className="steps">
          <div className="step-container">
            <p><strong>1. Choose</strong></p>
            <p>From the list of the available menu, find the food you're craving.</p>
          </div>
          <div className="step-container">
            <p><strong>2. Pay</strong></p>
            <p>Pay by using our secure online payment processing services or cash on delivery.</p>
          </div>
          <div className="step-container">
            <p><strong>3. Enjoy</strong></p>
            <p>Our ground pilots will blast off & deliver your food in minutes.</p>
          </div>
        </div>
        <div className="image-container">
          <img src={assets.driver} alt="Driver delivering food" />
        </div>
      </div>
    </div>
  );
};

export default HowItWork;