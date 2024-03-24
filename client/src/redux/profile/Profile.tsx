import axios from "axios";
import React, { useEffect, useState } from "react";

const Profile = () => {
  const [userData, setUserData] = useState({ email: "", username: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3001/profile", { withCredentials: true })
      .then((response) => {
        setIsLoggedIn(response.data.loggedIn);

        if (response.data.loggedIn === true) {
          setUserData(response.data.user[0]);
        }
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  if (!isLoggedIn) {
    return <p>Log in</p>;
  }
  return (
    <section>
      {userData.username && <p>Username: {userData.username}</p>}
      {userData.email && <p>Email: {userData.email}</p>}
    </section>
  );
};

export default Profile;
