import React from 'react';
import Header from '../components/Header';
import HowItWork from '../pages/HowItWork'; // Adjust the path as needed
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <HowItWork />
    </div>
  );
};

export default Home;
