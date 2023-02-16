import React from 'react'
import SidebarData from './Data'
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    const activeLink = 'bg-secondary text-white mt-5 px-4 rounded w-full h-10 flex justify-start items-center text-white   bg-neutral-50'

    const normalLink = 'text-primary  px-4  mt-5 w-full h-10 flex justify-start items-center text-white  rounded hover:bg-secondary hover:text-white'

  return (

    <section>
      <div className="text-white">
          {
               SidebarData.map((item, index)=>{
                return(
                    <div key={index}>
                        <NavLink to={item.link}
                        className={({ isActive }) =>
                        isActive ? activeLink: normalLink}
                      
                         >
                        <span class="pr-2">{item.icon}</span>
                        <span>{item.name}</span>
                        </NavLink>
                        
                    </div>
                )
              })
          }
  
      </div>
    </section>
 
  )
}

export default Sidebar

