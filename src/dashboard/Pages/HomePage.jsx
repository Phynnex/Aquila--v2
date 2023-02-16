import VulnerabilityCards from "dashboard/components/Util_Components/Reports/VulnerabilityCards";
import Protect from "dashboard/components/Util_Components/Protect/Protect";
import UploadApk from "dashboard/components/Util_Components/Reports/UploadApk";
import UploadIos from "dashboard/components/Util_Components/Reports/UploadIos";
import Monitor from "dashboard/components/Util_Components/Monitor/Monitor";
import { useStateContext } from "../../Context/ContextProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "Api/axios";

const Hompage = () => {
  const { projectName: project_name, setReports } = useStateContext();
  const { data } = useQuery({
    queryKey: ["Report", project_name],
    queryFn: () =>
      axios.get("api/reports/", {
        params: {
          project_name,
        },
      }),
  });
  setReports(data);

  
  return (
    <div className=" pr-8 mb-48">
      <p>{project_name}</p>
      <VulnerabilityCards  />
      <p className="text-secondary tex-lg font-bold mt-6 mb-4 ml-3">Scan</p>
      <div className="flex justify-around">
        <UploadApk />
        <UploadIos />
      </div>
      <p className="text-secondary tex-lg font-bold mt-6 mb-4 ml-3">Protect</p>
      <div className="flex justify-around">
        <Protect />
        <Protect />
      </div>
      <p className="text-secondary tex-lg font-bold mt-6 mb-4 ml-3">Monitor</p>
      <div className="flex justify-around">
        <Monitor />
      </div>
      <br />
      <br />
    </div>
  );
};

export default Hompage;
