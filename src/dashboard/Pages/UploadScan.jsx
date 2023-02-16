import React, { useState } from "react";
import { AiOutlineCloudUpload, AiFillFileText } from "react-icons/ai";
// import { useNavigate } from "react-router-dom";
import axios from "Api/axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { useMutation } from "@tanstack/react-query";
import { useStateContext } from "Context/ContextProvider";
import Navbar from "dashboard/components/nav/Navbar";

const UploadScan = () => {
  const [file, setFile] = useState("");
  const { projectName } = useStateContext();
  const [uploadedFile, setUploadedFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [scanFile, setScanFile] = useState("");

  const handleChange = (e) => {
     setFile(e.target.files[0])
     setUploadedFile(null)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("project_name", projectName);

      const res = await axios.post("api/upload/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("Upload successful..");
      setUploadedFile(res.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error)
      if (error?.response?.status === 400) {
        return toast.error(error?.response?.data?.error);
      }
      toast.error("Network Error");
    }
  };
  const handleScan = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setUploadedFile(null)


    try {
      const res = await axios.post("api/scan/", {
        ...uploadedFile,
        project_name: projectName,
      });
      toast.success("Scan successful..");
      setScanFile(res.data);
      console.log(scanFile);
      setIsLoading(false);
      
    } catch (error) {
      setIsLoading(false);
      toast.error("Error");
    }
  };

  return (
    <>
      <Navbar />
      <form onSubmit={handleSubmit}>
        <div className="flex items-center justify-center w-2/4 m-auto pt-28 relative">
          <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <AiOutlineCloudUpload />
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Supported Files : ipa or ibb
              </p>
            </div>
            <input
              type="file"
              onChange={handleChange}
              className="hidden"
            />
          </label>
        </div>

        {file && (
          <div className="flex justify-center items-center pt-9">
            <AiFillFileText /> {file?.name}
          </div>
        )}
        {isLoading && (
          <div className="flex justify-center items-center pt-9">
            <i className="fa-solid fa-spinner fa-spin-pulse fa-7x"></i>
          </div>
        )}
        {uploadedFile && (
          <div className="flex flex-col items-center text-right  pt-9">
            <p>Project : {uploadedFile?.project}</p>
            <p>File Name : {uploadedFile?.file_name}</p>
            <p>Hash : {uploadedFile?.hash}</p>
            <p>Scan Type : {uploadedFile?.scan_type}</p>
            <p>Scan Analyzer : {uploadedFile?.analyzer}</p>
          </div>
        )}
        {!uploadedFile && (
          <div className="flex gap-4 justify-center items-center pt-9">
            <button onClick={() => setFile("")}>Cancel</button>
            <button>Upload</button>
          </div>
        )}
      </form>
      {uploadedFile && (
        <div className="flex gap-4 justify-center items-center pt-9">
          <button onClick={() => setUploadedFile("")}>Cancel</button>
          <button onClick={handleScan}>Scan</button>
        </div>
      )}
    </>
  );
};

export default UploadScan;
