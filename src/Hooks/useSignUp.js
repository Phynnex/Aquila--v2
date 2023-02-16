import axios from "../Api/axios";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "Context/AuthContext";

export const useSignup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const {  dispatch } = useAuth();

  const signup = async (email, username, company, password) => {
    setIsLoading(true);

    try {
      const user = await axios.post(
        "auth/register/",
        JSON.stringify({ email, username, company, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      setSuccess(true);
      console.log(user);
   

      localStorage.setItem("user", JSON.stringify(user));
      toast.success("Account Created, check email for verification");
      setIsLoading(false);
      dispatch({ type: 'REGISTER_SUCCESS', payload: user });

      //clear state and controlled inputs
      //need value attrib on inputs for this
    } catch (error) {
      if (error) {
        setIsLoading(false);
        setSuccess(false);
        dispatch({ type: 'REGISTER_FAIL', payload: error.message });
      }
      if (error.response?.status === 400) {
        toast.error("Email Already Exist");
        return;
      }
      toast.error("Network Error");
    }
  };

  return { signup, isLoading, success };
};
