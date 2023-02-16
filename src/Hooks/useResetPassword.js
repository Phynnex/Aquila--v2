import axios from "../Api/axios";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const useResetPassword = () => {
    const [verified, setVerified] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    

    const resetPassword = async(token, password, password1) => {
        try {
             await axios.post(
                "/auth/set-new-password/",
                JSON.stringify({ token, password, password1 })
            );
            setVerified(true);
            
        } catch (error) {
            if (error) {
                setIsLoading(false);
                
              }
              if (error.response?.status === 400) {
                toast.error("Invalid Token");
                return;
              }
              toast.error("Network Error");
        }
    };
    return { resetPassword, verified, isLoading };
};