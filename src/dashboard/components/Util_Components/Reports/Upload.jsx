import React from "react";
import { BsCloudUpload } from "react-icons/bs";
import { useStateContext } from "../../../../Context/ContextProvider";

const Upload = () => {
  const { setOpenModal } = useStateContext();
  
  return (
    <div
    onClick={() => setOpenModal(true)}
      className=" flex justify-center shadow-lg shadow-secondary-500/500  w-[48%]  p-4 h-80 rounded-md bg-neutral-50 border border-x-grey border-y-grey"
    >
      <div className="flex flex-col justify-center items-center ">
        <BsCloudUpload className="text-9xl text-secondary" />
        <p>Click here to upload an APK file</p>
      </div>
    </div>
  );
};

export default Upload;
