import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { useStateContext } from "../../../Context/ContextProvider";

import "react-toastify/dist/ReactToastify.css";

const UploadFileModal = () => {
  const { setOpenModal } = useStateContext();


 

  return (
    <div class="bg-secondary shadow-lg shadow-neutral-500/50 h-screen fixed   w-screen flex justify-center items-center backdrop-filter backdrop-blur-sm bg-opacity-40 z-10 -mt-60 -ml-40">
      <div class=" bg-white w-[600px] py-10 relative pt-4 rounded-md ">
        <div class="flex flex-col pl-20 leading-9">
          <button
            onClick={() => setOpenModal(false)}
            class="absolute right-4 top-4"
          >
            <MdOutlineCancel />
          </button>

          <p className="w-2/3 mt-6">
            Please uploading an unobscuted and unecrypted app file will help
            detect security flaws
          </p>

          <form class="flex flex-col onSubmit={handleSubmit} ">
            <input
              className="w-96 rounded p-2 bg-grey outline-none "
              type="file"            />
            <button
              type="submit"
              class="w-[10rem] flex items-start bg-secondary text-white py-1 pl-4 my-2 rounded-md"
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UploadFileModal;
