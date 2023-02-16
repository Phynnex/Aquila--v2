import React from "react";
import Navbar from "./nav/Navbar";
import NavPage from "../Pages/Navpage";
import Sidebar from "./nav/Sidebar";

const DashboardPage = () => {
  return (
    <>
      <section>
        <div >
          <Navbar />
        </div>
      </section>

      <section>
        <div className="grid grid-cols-12 static">
          <div className="col-span-3  h-screen   px-4 md:col-span-2  fixed top-20 bg-white shadow-lg shadow-neutral-500/50 opacity-100 z-10">
            <Sidebar />
          </div>

          <div className="col-span-9 h-screen md:col-span-10  w-full relative top-24 left-52 right-10  ">
            <NavPage />
          </div>
        </div>
      </section>
    </>
  );
};

export default DashboardPage;
