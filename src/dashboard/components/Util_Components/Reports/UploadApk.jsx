import React from "react";
import { BsCloudUpload } from "react-icons/bs";
import { useStateContext } from "Context/ContextProvider";
import { useNavigate, Link } from "react-router-dom";

const UploadApk = () => {
  const { reports } = useStateContext();

  const navigate = useNavigate();

  return (
    <div
      
      className=" flex justify-center shadow-lg shadow-secondary-500/500  w-[48%]  p-4 h-80 rounded-md bg-neutral-50 border border-x-grey border-y-grey"
    >
      {!reports?.data?.data?.apk && (
        <div onClick={() => navigate("/upload-scan")} className="flex flex-col justify-center items-center ">
          <BsCloudUpload className="text-4xl " />
          <p>Click here to upload an APK file</p>
        </div>
      )}
      {reports?.data?.data?.apk && (
        <div className="p-5 m-5">
          <p>File Name :{reports?.data?.data?.apk?.FILE_NAME} </p>
          <p>Hash : {reports?.data?.data?.apk?.SIZE}</p>
          <p>Sha5 : {reports?.data?.data?.apk?.MD5}</p>
          <p>App Name : {reports?.data?.data?.apk?.APP_NAME}</p>
          <Link to="/dashboard/report-apk">
          <button className="bg-secondary p-2 text-white">View Full Report</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default UploadApk;