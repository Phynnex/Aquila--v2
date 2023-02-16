import React from "react";
import { useQuery } from "@tanstack/react-query";
import { AiFillAppstore } from "react-icons/ai";
import { MdAddAlert } from "react-icons/md";
import { TbChevronDown } from "react-icons/tb";
import { Link } from "react-router-dom";
import logo from "../../../assets/Logo.png";
import avatar from "../../../assets/avatar.jpg";

import axios from "Api/axios";

const Navbar = () => {
  const { data } = useQuery({
    queryKey: ["Profile"],
    queryFn: () => axios.get("api/profile/"),
  });
  // console.log(data);

  return (
    <div class="relative ">
      <main class=" bg-white fixed flex w-full justify-between  items-center bg-neutral-50 shadow-lg shadow-neutral-500/50 h-14 opacity-100 z-10">
        <Link to="/">
          <img src={logo} alt="aquila logo" className="w-[12rem] pt-2 " />
        </Link>
        <div class="flex justify-center items-center w-auto">
          <div class="flex justify-center items-center">
            <Link to="/projects" class="pr-8 flex justify-center items-center">
              <AiFillAppstore />
              <span class="pl-2">All Apps</span>
            </Link>
          </div>
          <div class="flex pr-8">
            <MdAddAlert />
          </div>
          <div class="pr-8 flex justify-center items-center">
            <img
              class="h-6 w-6 rounded-full gap-2"
              src={avatar}
              alt="profile"
            />
            <p class="pl-2">{data?.data?.username}</p>
            <TbChevronDown size={30} class="pl-4" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Navbar;
