import axios from "../Api/axios";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export const useForgetPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  

  const forgetPassword = async (email) => {
    setIsLoading(true);

    try {
      const response = await axios.post(
        "auth/request-password-reset/",
        JSON.stringify({ email }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      setSuccess(true);
      console.log(response);

      toast.success("Check email for verification");
      setIsLoading(false);
    

      //clear state and controlled inputs
      //need value attrib on inputs for this
    } catch (err) {
      if (err) {
        setIsLoading(false);
        setSuccess(false);
        console.log(err)
      }
      if (err.response?.status === 400) {
        toast.error("Invalid Email Address");
        return;
      }
      toast.error("Network Error");
    }
  };

  return { forgetPassword, isLoading, success };
};
