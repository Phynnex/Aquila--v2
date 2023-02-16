
import { MdOutlineCancel } from "react-icons/md";
import { useStateContext } from "../../../Context/ContextProvider";
import { useMutation } from "@tanstack/react-query";
import axios from "Api/axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import { useNavigate } from "react-router-dom";


const NewProjectModal = () => {
  const { setOpenModal, setProjectName, projectName } = useStateContext();
  const navigate = useNavigate();



  const {mutate, error} = useMutation(async (projectName) => {
    const response = await axios.post("api/projects/", {name : projectName});
    return response.data;
  }, {
    onSuccess: (data) => {
      console.log('Project created successfully: ', data);
      toast.success('Project created successfully')
      
      setOpenModal(false)
      navigate("/dashboard/home")
    },
    onError: () => console.log('error')
  });
 


    if (error?.response?.status === 400) {
      console.log(error)
      toast.error("Project Name already exist");
      
    }
 
 

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(projectName);
  };

  return (
    <div class="bg-blue shadow-lg shadow-neutral-500/50 h-screen absolute  w-screen flex justify-center items-center backdrop-filter backdrop-blur-sm bg-opacity-50 z-3">
      <div class=" bg-white w-[600px] h-[230px] relative pt-4 ">
        <div class="flex flex-col pl-20 leading-9">
          <button
            onClick={() => setOpenModal(false)}
            class="absolute right-4 top-4"
          >
            <MdOutlineCancel />
          </button>
          <p>Create a new Project</p>

          <p>Your App Name</p>
          <form class="flex flex-col" onSubmit={handleSubmit}>
            <input
              onChange={(e) => setProjectName(e.target.value)}
              value={projectName}
              className="w-96 rounded py-1 pl-4 bg-grey outline-none text-secondary placeholder:text-secondary"
              type="text"
              placeholder="Enter your app name (e.g) zenith bank"
            />
            <button
              type="submit"
              disabled={!projectName}
              class="w-[9rem] flex items-start bg-secondary text-white py-1 pl-4 my-2 "
            >
              Create Project
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewProjectModal;
