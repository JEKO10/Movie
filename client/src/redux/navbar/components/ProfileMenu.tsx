import axios from "axios";
import React, { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

import { Underline } from "../../singleMovie/SingleMovie.styled";
import {
  ProfileHeader,
  ProfileMenu as Container,
  ProfileModal
} from "../Navbar.styled";

const ProfileMenu = () => {
  const [user, setUser] = useState({ username: "" });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onLinkChange = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3001/settings`, { withCredentials: true })
      .then((response) => {
        if (response.data.user.lenght !== 0) {
          setUser(response.data.user[0]);
        } else {
          setUser({ username: "" });
        }
      })
      .catch((error) => {
        console.error("Error fetching user data: ", error);
      });
  }, []);

  if (!user.username) {
    return;
  }
  return (
    <Container>
      <ProfileHeader onClick={() => setIsModalOpen(!isModalOpen)}>
        <CgProfile />
        <p>{user.username}</p>
        <IoIosArrowDown />
      </ProfileHeader>
      {isModalOpen && (
        <ProfileModal isModalOpen={isModalOpen}>
          <li onClick={onLinkChange}>
            <Link to="/profile">Profile</Link>
          </li>
          <Underline margin="5px -20px 5px -5px" width="calc(100% + 25px)" />
          <li onClick={onLinkChange}>
            <Link to="/">Home</Link>
          </li>
          <li onClick={onLinkChange}>
            <Link to="/profile/films">Films</Link>
          </li>
          <li onClick={onLinkChange}>
            <Link to="/profile/reviews">Reviews</Link>
          </li>
          <li onClick={onLinkChange}>
            <Link to="/profile/likes">Likes</Link>
          </li>
          <li onClick={onLinkChange}>
            <Link to="/profile/watchlist">Watchlist</Link>
          </li>
          <li onClick={onLinkChange}>
            <Link to="/profile/lists">Lists</Link>
          </li>
          <Underline margin="5px -20px 5px -5px" width="calc(100% + 25px)" />
          <li onClick={onLinkChange}>
            <Link to="/profile/settings">Settings</Link>
          </li>
          <li onClick={onLinkChange}>
            <Link to="/">Sign Out</Link>
          </li>
        </ProfileModal>
      )}
    </Container>
  );
};

export default ProfileMenu;
