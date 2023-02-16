import React from 'react';
import { BsFileEarmarkLock } from 'react-icons/bs';


const Protect = () => {
    return (
      <div
      
        className=" flex justify-center shadow-lg shadow-secondary-500/500  w-[48%]  p-4 h-80 rounded-md bg-neutral-50 border border-x-grey border-y-grey"
      >
        <div className="flex flex-col justify-center items-center ">
          <BsFileEarmarkLock className="text-4xl " />
          <p>No File Uploaded</p>
        </div>
      </div>
    );
}



export default Protect;