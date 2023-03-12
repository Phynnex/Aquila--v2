import React,{useState} from "react";
import { useStateContext } from "Context/ContextProvider";
import ApkAccordion from "./../../components/Util_Components/ApkAccordion";
import PlayStoreModal from "./../../components/Modals/PlayStoreModal";
import axios from "../../../Api/axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const APKReport = () => {
  const { scanFile, openModal, setOpenModal } = useStateContext();
  const [isLoading, setIsLoading] = useState(false)
  const {
    projectName: project_name,
    reports,
  } = useStateContext();
 

  const handleDownloadReport = async () => {
    setIsLoading(true)
    try {
      const response = await axios.get("api/pdf/", {
        params: {
          project_name,
          id: reports.data.data.apk[0].id,
          ipa: false,
          apk: true,
        },

        responseType: "blob",
      });
      const blob = new Blob([response.data], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "Aquila-scan-report.pdf";
      link.click();
      // document.removeChild(link);
      setIsLoading(false)
      toast.success("Download pdf successful")
    } catch (error) {
      setIsLoading(false)
      toast.error("Unable to download")
      console.error(error);
    }
  };

  const handleSendEmail = async () => {
    try {
      const data = await axios.get("api/email-pdf/", {
        params: {
          project_name,
          id: reports.data.data.apk[0].id,
          ipa: false,
          apk: true,
        },
      });
      toast.success("Email sent successfully..");

      console.log(data.data, "emailPdf");
    } catch (error) {
      console.log(error);
      toast.error("Unable to Send Email");
    }
  };


  return (
    <>
     {openModal && <PlayStoreModal/>}
    <div className="">
      
      <div className="flex justify-between items-center">
        <p className="text-secondary font-semibold ">
          Vulnerability Scan Report:
        </p>
        <div className="w-1/3 flex justify-between items-center mr-14">
          <button  onClick={handleDownloadReport} className="py-2 px-4 bg-secondary text-white rounded-md hover:bg-white hover:text-secondary hover:border-2 hover:font-semibold">
          {isLoading ? (
                    <i className="fa-solid fa-spinner fa-spin-pulse"></i>
                  ) : (
                    "Download Report"
                  )}
          </button>
          <button onClick={handleSendEmail} className="py-2 px-4 bg-secondary text-white rounded-md hover:bg-white hover:text-secondary hover:border-2 hover:font-semibold">
          {isLoading ? (
                    <i className="fa-solid fa-spinner fa-spin-pulse"></i>
                  ) : (
                    "Send Report To Mail"
                  )}
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
            <p className="text-secondary font-semibold">Package Version</p>
            <p className="text-secondary">{scanFile?.version_name}</p>
          </div>
          <div>
            <p className="text-secondary font-semibold">Medium severity test</p>
            <p className="text-secondary"></p>
          </div>
        </div>
        <div className="flex justify-between mt-6 pr-32">
          <div>
            <p className="text-secondary font-semibold">
              Total Scanned vulnerability
            </p>
            <p className="text-secondary"></p>
          </div>
          <div>
            <p className="text-secondary font-semibold ">
              Total vulnerability detected
            </p>
            <p className="text-secondary"></p>
          </div>
          <div>
            <p className="text-secondary font-semibold">Package Version</p>
            <p className="text-secondary"></p>
          </div>
        </div>
      </div>
     
      {scanFile?.playstore_details &&

        <div
        onClick={() => setOpenModal(true)}
        className="flex justify-end mr-14"
      >
        <button className="py-2 px-4 bg-secondary text-white rounded-md hover:bg-white hover:text-secondary hover:border-2 hover:font-semibold">
          Play Store
        </button>
      </div>
      }
      
      <ApkAccordion />
    </div>
    </>
  );
};

export default APKReport;
