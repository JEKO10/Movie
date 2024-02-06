import React from "react";
import Sidebar from "./Sidebar";
import Friends from "./Friends";

const FixedSidebar = () => {
  return (
    <section>
      <Sidebar />
      <div
        style={{
          backgroundColor: "#3D3D3D",
          height: "3px",
          width: "145px",
          margin: "0 50px",
          borderRadius: "10px",
        }}
      />
      <Friends />
    </section>
  );
};

export default FixedSidebar;
