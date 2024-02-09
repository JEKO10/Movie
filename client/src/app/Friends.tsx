import React from "react";

import friend from "../assets/images/icons/friend.svg";
import { Side } from "./Temp.style";

const Friends = () => {
  return (
    <Side>
      <h3>Friends:</h3>
      <div>
        <img src={friend} alt="friend" />
        <p>@username</p>
      </div>
      <div>
        <img src={friend} alt="friend" />
        <p>@username</p>
      </div>
      <div>
        <img src={friend} alt="friend" />
        <p>@username</p>
      </div>
      <div>
        <img src={friend} alt="friend" />
        <p>@username</p>
      </div>
      <div>
        <img src={friend} alt="friend" />
        <p>@username</p>
      </div>
    </Side>
  );
};

export default Friends;
