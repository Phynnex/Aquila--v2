import React from "react";

const Loader = () => {
  return (
    <div style={{height:'100vh', display:'flex', alignItems:'center', justifyContent:'center'}}>
      <i class="fa-solid fa-spinner fa-spin-pulse fa-6x"></i>
    </div>
  );
};

export default Loader;
