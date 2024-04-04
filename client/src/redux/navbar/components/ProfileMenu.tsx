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
      .get("http://localhost:3001/JEKO")
      .then((response) => {
        setUser(response.data.user);
      })
      .catch((error) => {
        console.error("Error fetching user settings:", error);
      });
  }, [isModalOpen]);

  return (
    <Container>
      <ProfileHeader onClick={() => setIsModalOpen(!isModalOpen)}>
        <CgProfile />
        {user.username}
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
