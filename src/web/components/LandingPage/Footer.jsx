import React from "react";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { ImTwitter } from "react-icons/im";

const Footer = () => {
  return (
    <div>
      <div className="w-full h-80 flex justify-around items-center bg-secondary text-white">
        <div className="div">Logo</div>
        <div>
          <p className="font-semibold">RESOURCE</p>
          <div className="my-6">
            <p className="mb-2">Home</p>
            <p className="mb-2">Get in Touch</p>
            <p className="mb-2">FAQs</p>
          </div>
        </div>

        <div>
          <p className="font-semibold">QUICK LINKS</p>
          <div className="my-6">
            <p className="mb-2">Scan</p>
            <p className="mb-2">Protect</p>
            <p className="mb-2">Monitor</p>
          </div>
        </div>
        <div>
          <p className="font-semibold mb-2">NEWSLETTERS</p>
          <div>
            <input
              type="text"
              placeholder="Email"
              className=" w-full rounded-md text-secondary outline-none py-2 px-4"
            />
            <button className="w-full bg-primary text-white py-2 rounded-md mt-2">
              Submit
            </button>
            <div className="w-2/5 flex justify-around text-white text-2xl mt-4">
              <FaInstagram />
              <FaFacebookSquare />
              <ImTwitter />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between mx-6">
            <p>Copyright (c) 2022 AQUILA. All Right Reserved</p>
            <p>Support  |  Privacy Policy  |  Terms of Service</p>
      </div>
    </div>
  );
};

export default Footer;
