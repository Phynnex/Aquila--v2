import React from "react";


const Why = () => {
  return (
    <div>
        
      <div
        className="w-full h-[90vh] flex justify-center items-center mb-10 bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${'https://images.unsplash.com/photo-1510906594845-bc082582c8cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=844&q=80'})` }}
      >
        <div className="w-1/2 flex flex-col justify-center  items-center">
          <p className="text-white font-bold text-6xl text-center">
          Why Choose Us
          </p>
          <p className="w-[80%] text-white text-center mt-10 text-1xl">
          Aquila is an intelligent and comprehensive end-to-end mobile 
app security solution. Developers can quickly scan, monitor and 
protect any mobile app with in minutes.
          </p>
          
          
          
        </div>
      </div>
    </div>
  );
};

export default Why;
