import React from "react";
import { FaDotCircle } from "react-icons/fa";

import { Side } from "./Temp.style";

const Friends = () => {
  return (
    <Side>
      <h3>Friends:</h3>
      <div>
        <FaDotCircle />
        <p>@username</p>
      </div>
      <div>
        <FaDotCircle />
        <p>@username</p>
      </div>
      <div>
        <FaDotCircle />
        <p>@username</p>
      </div>
      <div>
        <FaDotCircle />
        <p>@username</p>
      </div>
      <div>
        <FaDotCircle />
        <p>@username</p>
      </div>
    </Side>
  );
};

export default Friends;
