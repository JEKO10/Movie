import axios from "axios";
import React, { useEffect, useState } from "react";

const Profile = () => {
  const [userData, setUserData] = useState({ email: "", username: "" });

  useEffect(() => {
    axios
      .get("http://localhost:3001/profile", { withCredentials: true })
      .then((response) => {
        if (response.data.loggedIn === true) {
          setUserData(response.data.user[0]);
        } else {
          console.log("User not logged in");
        }
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, [userData]);

  return (
    <section>
      {userData.username && <p>Username: {userData.username}</p>}
      {userData.email && <p>Email: {userData.email}</p>}
    </section>
  );
};

export default Profile;
