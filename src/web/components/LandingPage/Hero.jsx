import React from "react";
import Hero_Background from "../../../assets/hero.png";

const Hero = () => {
  return (
    <div>
        
      <div
        className="w-full h-screen flex justify-center items-center mb-10 "
        style={{ backgroundImage: `url(${Hero_Background})` }}
      >
        <div className="w-1/2 flex flex-col justify-center  items-center">
          <p className="text-white font-bold text-3xl text-center">
            Mobile Application Security for Modern Application development
          </p>
          <p className="w-2/3 text-white text-center mt-6">
            Aquila is an intelligent and comprehensive end-to-end mobile app
            security solution. Developers can quickly scan, monitor and protect
            any mobile app with in minutes.
          </p>
          
          <button className="bg-secondary text-white py-2 px-16 mt-6 rounded-md hover:bg-white hover:text-secondary hover:border-2 hover:font-semibold">Start a Trial</button>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;
