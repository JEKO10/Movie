import React from "react";
import home from "../assets/images/icons/home.svg";
import community from "../assets/images/icons/community.svg";
import list from "../assets/images/icons/list.svg";
import play from "../assets/images/icons/play.svg";
import { Side } from "./Temp.style";

const Sidebar = () => {
  return (
    <Side>
      <div>
        <img src={home} alt="homeImg" />
        <p>Home</p>
      </div>
      <div>
        <img src={play} alt="playImg" />
        <p>Movies</p>
      </div>
      <div>
        <img src={list} alt="listImg" />
        <p>Lists</p>
      </div>
      <div>
        <img src={community} alt="communityImg" />
        <p>Community</p>
      </div>
      <div>
        <img src={community} alt="communityImg" />
        <p>Settings</p>
      </div>
    </Side>
  );
};

export default Sidebar;
