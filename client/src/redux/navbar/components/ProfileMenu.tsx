import axios from "axios";
import React from "react";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

import {
  useAppDispatch,
  useAppSelector,
  useGetUsername,
  useOutsideClick
} from "../../../common/hooks";
import { Underline } from "../../singleMovie/SingleMovie.styled";
import {
  ProfileHeader,
  ProfileMenu as Container,
  ProfileModal
} from "../Navbar.styled";
import { setIsProfileOpen } from "../navbarSlice";

const ProfileMenu = () => {
  const { isProfileOpen } = useAppSelector((store) => store.navbar);
  const { isLoggedIn } = useAppSelector((store) => store.profile);
  const dispath = useAppDispatch();

  const { ref } = useOutsideClick(setIsProfileOpen);
  const { username } = useGetUsername();

  const onLinkChange = () => {
    dispath(setIsProfileOpen(false));
  };

  const handleLogout = () => {
    axios
      .get("http://localhost:3001/logout", {
        withCredentials: true
      })
      .then(() => {
        window.location.reload();
      });
  };

  if (isLoggedIn)
    return (
      <Container ref={ref}>
        <ProfileHeader
          onClick={() => dispath(setIsProfileOpen(!isProfileOpen))}
        >
          <CgProfile />
          <p>{username}</p>
          <IoIosArrowDown />
        </ProfileHeader>
        {isProfileOpen && (
          <ProfileModal isModalOpen={isProfileOpen}>
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
              <Link to="/settings">Settings</Link>
            </li>
            <li onClick={handleLogout}>
              <Link to="/">Sign Out</Link>
            </li>
          </ProfileModal>
        )}
      </Container>
    );
};

export default ProfileMenu;
