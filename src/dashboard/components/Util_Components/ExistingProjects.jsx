import React from "react";
import { IoIosAppstore } from "react-icons/io";
import { RiGooglePlayFill } from "react-icons/ri";
import { BsFolder2 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "Context/ContextProvider";

const ExistingProjects = ({ project }) => {
  const navigate = useNavigate();
  const { setProjectName, projectX, setProjectX } = useStateContext();


  const handleClick = () => {
    console.log(projectX, 'pro')
    setProjectX(project)
    setProjectName(project.name);
    navigate("/dashboard/home");
  };


  return (
    <div
      onClick={handleClick}
      class="bg-primary shadow-lg shadow-neutral-500/50 w-[180px] h-[180px] mx-9"
    >
      <div class="flex flex-col justify-center items-center mt-[50px]">
        <BsFolder2 size={34} className="text-white" />
        <p class="py-2 text-white">{project.name}</p>
      </div>
      <div class="flex justify-center gap-2">
        {project?.apk && <RiGooglePlayFill className="text-white" />}
        {project?.ipa && <IoIosAppstore className="text-white" />}
      
      </div>
    </div>
  );
};

export default ExistingProjects;
