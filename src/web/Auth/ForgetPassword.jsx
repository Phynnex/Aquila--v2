import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "assets/Logo.png";
import Login_Background from "assets/Login_bg.png";
import { useForgetPassword } from "Hooks/useForgetPassword"


const ForgetPassword = () => {
 
  const [email, setEmail] = useState("");
 
  const { forgetPassword, isLoading, error } = useForgetPassword();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await forgetPassword(email);

    if(error) {
        console.log(error);
        return;
    }

    
  };

  return (
    <div className="flex justify-between">
      <div className="w-3/5 h-screen">
        <div className="flex flex-col justify-items-center items-center ">
          <div>
            <img src={Logo} alt="" className="w-[20rem] -mt-[6rem] mx-auto" />
            <p className="text-center text-2xl mb-6 -mt-[9rem] font-semibold">
           Reset Password
            </p>
            <form className="" onSubmit={handleSubmit}>
              <div>
                <input
                  className="w-96 rounded py-2 pl-4 bg-grey outline-none"
                  type="email"
                  required
                  value={email}
                  name="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

             
               

              <div className="bg-blue text-[#fff] rounded mt-4 pt-2 pb-2 pl-4 text-center">
                <button type="submit" disabled={!email || isLoading}>
                  {isLoading ? (
                    <i className="fa-solid fa-spinner fa-spin-pulse"></i>
                  ) : (
                    "Reset Password"
                  )}
                </button>
              </div>
              <Link
                to="/login"
                className="text-blue font-semibold flex justify-center mt-1"
              >
                Go Back to Login
              </Link>
            </form>
          </div>
        </div>
      </div>
      <div className="w-2/5 ">
        <img src={Login_Background} alt="login img" className="h-screen" />
      </div>
    </div>
  );
};

export default ForgetPassword;
