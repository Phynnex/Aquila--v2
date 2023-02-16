
import NewProject from "./../components/Util_Components/NewProject";
import ExistingProjects from "./../components/Util_Components/ExistingProjects";
import Navbar from "./../components/nav/Navbar";
import NewProjectModal from "dashboard/components/Modals/NewProjectModal";
import { useStateContext } from "Context/ContextProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "Api/axios";



const Projects = () => {
  
  const {openModal} = useStateContext();
  const {data, isError, error} = useQuery({ queryKey: ['Projects'], queryFn: () => axios.get("api/projects/")})
 
  console.log(data);

  if(isError) console.log(error)

  return (
    <div class="w-full h-screen">
      <div>
        <Navbar />
      </div>
      <div class="flex justify-center pt-[12.26rem] items-center bg-slate-400  flex-wrap">
        <NewProject />
        {data && data?.data?.map((project, id) => (<ExistingProjects key={id} project={project} />))}
        
        
        {openModal && <NewProjectModal />}
      </div>
    </div>
  );
};

export default Projects;
