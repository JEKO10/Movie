import axios from "axios";
import React, { useEffect, useState } from "react";
import { GoDotFill } from "react-icons/go";

import { UserData } from "../../common/types/typesTS";
import { Side } from "./Home.style";

const Friends = () => {
  const [friends, setFriends] = useState<UserData[]>([
    {
      id: 0,
      username: "",
      email: ""
    }
  ]);

  useEffect(() => {
    axios.get("http://localhost:3001/searchUsers").then((response) => {
      setFriends(response.data);
    });
  }, []);

  return (
    <Side>
      <h3>Friends:</h3>
      {friends.map((friend) => (
        <div key={friend.id}>
          <GoDotFill />
          <p>{friend.username}</p>
        </div>
      ))}
    </Side>
  );
};

export default Friends;
