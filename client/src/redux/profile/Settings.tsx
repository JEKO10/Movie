import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Settings = () => {
  const [user, setUser] = useState({ email: "", username: "" });
  const { username } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/${username}`)
      .then((response) => {
        setUser(response.data.user);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, [username]);

  return (
    <div>
      {user ? (
        <div>
          <h1>User Profile</h1>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Settings;
