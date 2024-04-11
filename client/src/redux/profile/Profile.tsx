import axios from "axios";
import React, { useEffect, useState } from "react";

const Profile = () => {
  const [userData, setUserData] = useState({ email: "", username: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/profile`, { withCredentials: true })
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
      <p>This is restricted page</p>
      {userData.username && <p>Username: {userData.username}</p>}
      {userData.email && <p>Email: {userData.email}</p>}
    </section>
  );
};

export default Profile;
