import React from "react";
import { MdAppBlocking } from "react-icons/md";

const Monitor = () => {
  return (
    <div className=" flex justify-start shadow-lg shadow-secondary-500/500  w-[98%]  pl-32 h-56 rounded-md bg-neutral-50 border border-x-grey border-y-grey">
      <div className="flex items-center ">
        <MdAppBlocking className="text-6xl" />
        <div>
          <p className="w-2/3  ml-1 break-words">
            The APP/User monitoring will give you access to some user details
            like e-mail, OS, device model, etc...
          </p>

          <button className="flex items-center justify-around bg-grey px-12 py-2 mt-2 rounded-md  hover:bg-secondary hover:text-white">
            Activate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Monitor;
