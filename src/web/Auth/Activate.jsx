import { useEffect } from "react";
import { useVerify } from "../../Hooks/useVerify";
import { useNavigate } from "react-router-dom";

const getTokenFromURL = () => {
  return new URLSearchParams(window.location.search).get("token");
};

const Activate = () => {
  const { verifyUser, verified } = useVerify();
  const navigate = useNavigate();

  useEffect(() => {
    verifyUser(getTokenFromURL());
  }, []);

  if(verified) {
    navigate("/login")
  }

 
};

export default Activate;
