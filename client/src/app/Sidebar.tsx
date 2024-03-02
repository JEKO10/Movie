import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaRegCirclePlay } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import { IoListSharp } from "react-icons/io5";

import { Side } from "./Temp.style";

const Sidebar = () => {
  return (
    <Side>
      <div>
        <GoHomeFill />
        <p>Home</p>
      </div>
      <div>
        <FaRegCirclePlay />
        <p>Movies</p>
      </div>
      <div>
        <IoListSharp />
        <p>Lists</p>
      </div>
      <div>
        <FaRegHeart />
        <p>Community</p>
      </div>
      <div>
        <FaRegHeart />
        <p>Settings</p>
      </div>
    </Side>
  );
};

export default Sidebar;
