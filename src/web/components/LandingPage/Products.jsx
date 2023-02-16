import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsShieldCheck } from "react-icons/bs";
import { TbScan } from "react-icons/tb";
import { MdMonitor } from 'react-icons/md';

const Products = () => {
  return (
    <div className="">
      <div className="flex flex-col justify-center items-center">
        <p className="text-secondary text-base font-medium">Aquila Controls and Secure</p>
        <p className="font-bold text-secondary text-6xl">How it Works</p>
      </div>

    <div className="flex ">

   
      <div className="w-[100%] h-80 flex justify-around items-center">
        
      <div className="w-[200px]">
          <TbScan  size={45}/>
          <p className="font-semibold text-2xl text-secondary my-2">Scan</p>
          <p className="text-secondary font-medium mb-4">Ensure comprehensive coverage of your assets’ vulnerability</p>
          <div >
            <button className="flex items-center bg-secondary text-white py-2 px-4 rounded-md hover:bg-white hover:text-secondary hover:border-2 hover:font-semibold ">Read More <AiOutlineArrowRight /></button>
            
          </div>
        </div>
        <div className="w-[200px]">
          <BsShieldCheck size={45}/>
          <p className="font-semibold text-2xl text-secondary my-2">Protect</p>
          <p className="text-secondary font-medium mb-4">Ensure comprehensive coverage of your assets’ vulnerability</p>
          <div >
            <button className="flex items-center bg-secondary text-white py-2 px-4 rounded-md hover:bg-white hover:text-secondary hover:border-2 hover:font-semibold ">Read More <AiOutlineArrowRight /></button>
            
          </div>
        </div>
        <div className="w-[200px]">
          <MdMonitor  size={45}/>
          <p className="font-semibold text-2xl text-secondary my-2">Monitor</p>
          <p className="text-secondary font-medium mb-4">Ensure comprehensive coverage of your assets’ vulnerability</p>
          <div >
            <button className="flex items-center bg-secondary text-white py-2 px-4 rounded-md hover:bg-white hover:text-secondary hover:border-2 hover:font-semibold ">Read More <AiOutlineArrowRight /></button>
            
          </div>
        </div>
        
      </div>
      </div>
    </div>
  );
};

export default Products;
