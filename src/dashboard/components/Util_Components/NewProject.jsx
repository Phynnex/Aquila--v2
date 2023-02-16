import React from "react";
import { FiFolderPlus } from "react-icons/fi";
import { useStateContext } from "../../../Context/ContextProvider";

const NewProject = () => {
  const { setOpenModal } = useStateContext();
  return (
    <div
      onClick={() => setOpenModal(true)}
      class="bg-neutral-50 shadow-lg shadow-neutral-500/50 w-[180px] h-[180px]"
    >
      <div class="flex flex-col justify-center items-center mt-[65px]">
        <FiFolderPlus size={34} />
        <p class="pt-4">Create New Project</p>
      </div>
    </div>
  );
};

export default NewProject;
