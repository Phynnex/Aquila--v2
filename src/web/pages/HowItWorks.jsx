import React from "react";
import Navbar from "../components/LandingPage/Navbar";
import Hero from '../components/LandingPage/Hero';
import Products from '../components/LandingPage/Products';
import Why from '../components/LandingPage/Why';
import Trial from '../components/LandingPage/Trial';
import Footer from '../components/LandingPage/Footer';

const HowItWorks = () => {
  return (
    <div className="">
      <Navbar />
      <Hero/>
      <Products/>
      <Why/>
      <Trial/>
      <Footer/>
      
    </div>
  );
};

export default HowItWorks;
