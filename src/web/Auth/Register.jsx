import { useRef, useState, useEffect } from "react";
import SignIn_Background from "../../assets/Login_bg.png";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import { useSignup } from "../../Hooks/useSignUp";
import "react-toastify/dist/ReactToastify.css";

// import axios from './api/axios';

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const COMPANY_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const Register = () => {
  const userRef = useRef();
  const errRef = useRef();
  const { signup, isLoading, success } = useSignup();

  const [username, setUsername] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [company, setCompany] = useState("");
  const [validCompany, setValidCompany] = useState(false);
  const [companyFocus, setCompanyFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  // const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(USER_REGEX.test(username));
  }, [username]);
  useEffect(() => {
    setValidCompany(COMPANY_REGEX.test(company));
  }, [company]);
  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(password));
    setValidMatch(password === matchPwd);
  }, [password, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [username, password, matchPwd, company, email]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if button enabled with JS hack
    const v1 = USER_REGEX.test(username);
    const v2 = PWD_REGEX.test(password);
    const v3 = COMPANY_REGEX.test(company);
    const v4 = EMAIL_REGEX.test(email);
    if (!v1 || !v2 || !v3 || !v4) {
      setErrMsg("Invalid Entry");
      return;
    }
    await signup(email, username, company, password);
    console.log(success);
    if (success) {
      setUsername("");
      setCompany("");
      setEmail("");
      setPassword("");
      setMatchPwd("");
    }
  };

  return (
    <div className="flex justify-between h-screen">
      <div className="w-3/5  p-6 h-full">
        <div className="text-center">
          <div className="flex justify-center ">
          <img src={Logo} alt="" className="w-[20rem] -mt-[8rem] mx-auto" />
          </div>
          <p className="text-center text-2xl -mt-[10rem] font-semibold">Register</p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center items-center"
          >
            <input
              className={
                validName
                  ? "w-1/2 rounded mt-4 py-2 pl-4 bg-grey outline-green"
                  : "w-1/2 rounded mt-4 py-2 pl-4 bg-grey outline-none"
              }
              type="text"
              id="username"
              placeholder="Username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              required
              aria-invalid={validName ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
            />
            <p
              id="uidnote"
              className={
                userFocus && username && !validName
                  ? "inline-block text-red"
                  : "hidden"
              }
            >
              Username must be at least 4 characters
            </p>
            <input
              className={
                validEmail
                  ? "w-1/2 rounded mt-4 py-2 pl-4 bg-grey outline-green"
                  : "w-1/2 rounded mt-4 py-2 pl-4 bg-grey outline-none"
              }
              type="text"
              id="email"
              placeholder="Email"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
              aria-invalid={validEmail ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setEmailFocus(true)}
              onBlur={() => setEmailFocus(false)}
            />
            <p
              id="uidnote"
              className={
                emailFocus && email && !validEmail
                  ? "inline-block text-red"
                  : "hidden"
              }
            >
              Invalid Email Address
            </p>
            <input
              className={
                validCompany
                  ? "w-1/2 rounded mt-4 py-2 pl-4 bg-grey outline-green"
                  : "w-1/2 rounded mt-4 py-2 pl-4 bg-grey outline-none"
              }
              type="text"
              id="company"
              placeholder="Company"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setCompany(e.target.value)}
              value={company}
              required
              aria-invalid={validCompany ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setCompanyFocus(true)}
              onBlur={() => setCompanyFocus(false)}
            />
            <p
              id="uidnote"
              className={
                companyFocus && company && !validCompany
                  ? "inline-block text-red"
                  : "hidden"
              }
            >
              Company Name must be at least 4 characters
            </p>
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
                disabled={
                  !validName ||
                  !validPwd ||
                  !validMatch ||
                  !validCompany ||
                  !validEmail ||
                  isLoading
                    ? true
                    : false
                }
              >
                {isLoading ? (
                  <i className="fa-solid fa-spinner fa-spin-pulse"></i>
                ) : (
                  "Sign Up"
                )}
              </button>
            </div>
            <Link
              to="/login"
              className="text-blue font-semibold flex justify-center mt-1"
            >
              Already a User? Login
            </Link>
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

export default Register;
