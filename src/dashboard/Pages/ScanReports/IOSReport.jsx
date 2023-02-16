import IosAccordion from "dashboard/components/Util_Components/IosAccordion";
import axios from '../../../Api/axios';
import { useQuery } from "@tanstack/react-query";
import { useStateContext } from "Context/ContextProvider";



const IOS = () => {
    const { scanFile} = useStateContext();
    
    
  return (
    <div className="">
      <div className="flex justify-between items-center">
        <p className="text-secondary font-semibold ">
          Vulnerability Scan Report:
        </p>
        <div className="w-1/3 flex justify-between items-center mr-14">
          <button className="py-2 px-4 bg-secondary text-white rounded-md hover:bg-white hover:text-secondary hover:border-2 hover:font-semibold">
            Download report
          </button>
          <button className="py-2 px-4 bg-secondary text-white rounded-md hover:bg-white hover:text-secondary hover:border-2 hover:font-semibold">
            Send report to mail
          </button>
        </div>
      </div>

      <div className="text-start shadow-lg shadow-secondary-500/500  w-[95%]  p-4 h-48 mr-14 mt-4 mb-10 rounded-md bg-neutral-50 border border-x-grey border-y-grey">
        <div className="flex justify-between pr-24">
          <div>
            <p className="text-secondary font-semibold">Application Name</p>
            <p className="text-secondary">{scanFile?.app_name}</p>
          </div>
          <div>
            <p className="text-secondary font-semibold">
              Package Version
            </p>
            <p className="text-secondary">{scanFile?.app_version
}</p>
          </div>
          <div>
            <p className="text-secondary font-semibold">Medium severity test</p>
            <p className="text-secondary">34</p>
          </div>
        </div>
        <div className="flex justify-between mt-6 pr-32">
          <div>
            <p className="text-secondary font-semibold">
              Total Scanned vulnerability
            </p>
            <p className="text-secondary">34</p>
          </div>
          <div>
            <p className="text-secondary font-semibold ">
              Total vulnerability detected
            </p>
            <p className="text-secondary">34</p>
          </div>
          <div>
            <p className="text-secondary font-semibold">Package Version</p>
            <p className="text-secondary">34</p>
          </div>
        </div>
      </div>
      <IosAccordion />
    </div>
  );
};

export default IOS;
