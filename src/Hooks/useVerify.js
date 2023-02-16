import axios from "../Api/axios";
import { useState } from "react";

export const useVerify = () => {
    const [verified, setVerified] = useState(null);

    const verifyUser = async(token) => {
        try {
            const response = await axios.post(
                "/auth/email-verify/",
                JSON.stringify({ token })
            );
            setVerified(true);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };
    return { verifyUser, verified };
};