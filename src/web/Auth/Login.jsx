import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "assets/Logo.png";
import Login_Background from "assets/Login_bg.png";
import { useLogin } from "Hooks/useLogin";

const Login = () => {
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading, error } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email, password);

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
              Welcome Back
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

              <div>
                <input
                  className="w-96 rounded mt-4 py-2 pl-4 bg-grey outline-none"
                  required
                  value={password}
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
                />
              </div>

              <Link
                to="/forget-password"
                className="text-blue font-semibold flex justify-end mt-1"
              >
                Forgot Password?
              </Link>

              <div className="bg-blue text-[#fff] rounded mt-4 pt-2 pb-2 pl-4 text-center">
                <button type="submit" disabled={!email || !password || isLoading}>
                  {isLoading ? (
                    <i className="fa-solid fa-spinner fa-spin-pulse"></i>
                  ) : (
                    "Login"
                  )}
                </button>
              </div>
              <Link
                to="/register"
                className="text-blue font-semibold flex justify-center mt-1"
              >
                New Here ? Sign Up
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

export default Login;
