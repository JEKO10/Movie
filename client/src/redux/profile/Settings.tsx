import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Settings = () => {
  const [userData, setUserData] = useState({ email: "", username: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { username } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/settings`, { withCredentials: true })
      .then((response) => {
        if (response.data.user.lenght !== 0) {
          setUserData(response.data.user[0]);
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
          setUserData({ username: "You are not auth!", email: "" });
        }
      })
      .catch((error) => {
        console.error("Error fetching user data: ", error);
      });
  }, []);

  if (!isLoggedIn) {
    return <p>You need to log in to acces this page!</p>;
  }
  return (
    <section>
      {userData.username && <p>Username: {userData.username}</p>}
      {userData.email && <p>Email: {userData.email}</p>}
    </section>
  );
};

export default Settings;
