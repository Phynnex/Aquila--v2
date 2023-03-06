import React,{useState} from "react";
import { BsCloudUpload } from "react-icons/bs";
import { useStateContext } from "Context/ContextProvider";
import { useNavigate } from "react-router-dom";
import axios from "./../../../../Api/axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UploadApk = () => {
  const [isLoading, setIsLoading] = useState(false)
  const {
    projectName: project_name,
    reports,
  } = useStateContext();

  const navigate = useNavigate();

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

  // console.log(reports, 'report')
  // console.log(reports.data.data.data.apk, 'new')
  return (
    <div className=" flex justify-center shadow-lg shadow-secondary-500/500  w-[48%]  p-4 h-80 rounded-md bg-neutral-50 border border-x-grey border-y-grey">
      {reports?.data?.data?.apk?.length === 0 && (
        <div
          onClick={() => navigate("/upload-scan")}
          className="flex flex-col justify-center items-center "
        >
          <BsCloudUpload className="text-4xl " />
          <p>Click here to upload an APK file</p>
        </div>
      )}
      {reports?.data?.data?.apk?.length > 0 && (
        <div className="p-5 m-5">
          <p>File Name :{reports?.data?.data?.apk[0].FILE_NAME} </p>
          <p>Hash : {reports?.data?.data?.apk[0].SIZE}</p>
          <p>Sha5 : {reports?.data?.data?.apk[0].MD5}</p>
          <p>App Name : {reports?.data?.data?.apk[0].APP_NAME}</p>

          <div className="w-full flex justify-around">
            <button className="bg-secondary p-2 text-white rounded-md pt-4 mt-6 hover:text-secondary hover:bg-white hover:border-2 hover:border-secondary ">
              View Full Report
            </button>

            <button
              onClick={handleDownloadReport}
              className="bg-secondary p-2 text-white rounded-md pt-4 mt-6 hover:text-secondary hover:bg-white hover:border-2 hover:border-secondary "
            >
             {isLoading ? (
                    <i className="fa-solid fa-spinner fa-spin-pulse"></i>
                  ) : (
                    "Download Report"
                  )}
            </button>

            <button
              onClick={handleSendEmail}
              className="bg-secondary p-2 text-white rounded-md pt-4 mt-6 hover:text-secondary hover:bg-white hover:border-2 hover:border-secondary "
            >
              Send Report to Email
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadApk;
