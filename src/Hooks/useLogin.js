import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "Context/AuthContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "Api/axios";

export const useLogin = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { dispatch } = useAuth();
    const navigate = useNavigate();

    const login = async(email, password) => {
        try {
            setIsLoading(true);
            setError(null);

            const { data } = await axios.post(
                "api/token/",
                JSON.stringify({ email, password })
            );

            localStorage.setItem("user", JSON.stringify(data));
            axios.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${data["access"]}`;
            dispatch({ type: 'LOGIN_SUCCESS', payload: data });

            navigate("/projects")
        } catch (error) {
            if (error) {
                setIsLoading(false);
                setError(true);
                dispatch({ type: 'LOGIN_FAIL', payload: error.message });
            }
            if (error.response?.status === 401) {
                toast.error("Invalid Email or Password");
                return;
            }
            toast.error("Network Error");
        }
    };

    return { login, isLoading, error };
};
