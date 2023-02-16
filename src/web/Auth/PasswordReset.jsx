import { useRef, useState, useEffect } from "react";
import SignIn_Background from "../../assets/Login_bg.png";
import Logo from "../../assets/Logo.png";
import { useNavigate } from "react-router-dom";

import { useResetPassword } from "../../Hooks/useResetPassword";
import "react-toastify/dist/ReactToastify.css";

// import axios from './api/axios';
const getTokenFromURL = () => {
    return new URLSearchParams(window.location.search).get("token");
  };
  

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const PasswordReset = () => {
  const errRef = useRef();
  const { resetPassword, isLoading, verified } = useResetPassword();
  const  navigate  = useNavigate();

  const [password, setPassword] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);
  const [token , setToken] = useState(null);

  useEffect(() => {
    setToken(getTokenFromURL());
  }, []);


  const [errMsg, setErrMsg] = useState("");
  // const [success, setSuccess] = useState(false);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(password));
    setValidMatch(password === matchPwd);
  }, [password, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [password, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if button enabled with JS hack

    const v2 = PWD_REGEX.test(password);

    if (!v2) {
      setErrMsg("Invalid Entry");
      return;
    }
    await resetPassword(token, password, matchPwd);
    
    if (verified) {
      navigate("/login")
    }
  };

  return (
    <div className="flex justify-between h-screen">
      <div className="w-3/5  p-6 h-full">
        <div className="text-center">
          <div className="flex justify-center ">
            <img src={Logo} alt="" className="w-[20rem] -mt-[8rem] mx-auto" />
          </div>
          <p className="text-center text-2xl -mt-[10rem] font-semibold">
            Reset Password
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center items-center"
          >
            <input
              className={
                validPwd
                  ? "w-1/2 rounded mt-4 py-2 pl-4 bg-grey outline-green"
                  : "w-1/2 rounded mt-4 py-2 pl-4 bg-grey outline-none"
              }
              type="password"
              id="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
              aria-invalid={validPwd ? "false" : "true"}
              aria-describedby="pwdnote"
              onFocus={() => setPwdFocus(true)}
              onBlur={() => setPwdFocus(false)}
            />
            <p
              id="pwdnote"
              className={
                pwdFocus && !validPwd && password
                  ? "inline-block text-red"
                  : "hidden"
              }
            >
              Password must be atleast 8 characters, uppercase, lowercase,
              numbers and special character.
            </p>

            <input
              className={
                validMatch
                  ? "w-1/2 rounded mt-4 py-2 pl-4 bg-grey outline-green"
                  : "w-1/2 rounded mt-4 py-2 pl-4 bg-grey outline-none"
              }
              type="password"
              id="confirm_pwd"
              placeholder="Comfirm Password"
              onChange={(e) => setMatchPwd(e.target.value)}
              value={matchPwd}
              required
              aria-invalid={validMatch ? "false" : "true"}
              aria-describedby="confirmnote"
              onFocus={() => setMatchFocus(true)}
              onBlur={() => setMatchFocus(false)}
            />
            <p
              id="confirmnote"
              className={
                matchFocus && !validMatch && matchPwd
                  ? "inline-block text-red"
                  : "hidden"
              }
            >
              Must match the first password input field.
            </p>
            <div className="bg-blue  text-[#fff] rounded w-1/2 mt-6 py-2 pl-4">
              <button
                type="submit"
                disabled={!validPwd || !validMatch || isLoading ? true : false}
              >
                {isLoading ? (
                  <i className="fa-solid fa-spinner fa-spin-pulse"></i>
                ) : (
                  "Reset Password"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      <p
        ref={errRef}
        className={errMsg ? "errmsg" : "offscreen"}
        aria-live="assertive"
      >
        {errMsg}
      </p>

      <div className="w-2/5 ">
        <img src={SignIn_Background} alt="login img" className="h-full" />
      </div>
    </div>
  );
};

export default PasswordReset;
