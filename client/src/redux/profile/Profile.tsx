import axios from "axios";
import React from "react";

import {
  ProfileForm,
  ProfileName,
  ProfileWrapper,
} from "../../assets/style/Profile.styled";
import { useAppDispatch, useAppSelector } from "../../common/hooks";
import {
  setBio,
  setEmail,
  setLastName,
  setName,
  setUsername,
} from "./profileSlice";

const Profile = () => {
  const { name, lastName, email, username, bio } = useAppSelector(
    (store) => store.profile
  );
  const dispatch = useAppDispatch();

  const addUser = () => {
    axios
      .post("http://localhost:3001/create", {
        name,
        lastName,
        email,
        username,
        bio,
      })
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <ProfileWrapper>
      <h2>Profile</h2>
      <ProfileForm>
        <label>
          Username
          <input
            type="text"
            onChange={(event) => dispatch(setUsername(event.target.value))}
          />
        </label>
        <ProfileName>
          <label>
            Name
            <input
              type="text"
              onChange={(event) => dispatch(setName(event.target.value))}
            />
          </label>
          <label>
            Last name
            <input
              type="text"
              onChange={(event) => dispatch(setLastName(event.target.value))}
            />
          </label>
        </ProfileName>
        <label>
          Email address
          <input
            type="text"
            onChange={(event) => dispatch(setEmail(event.target.value))}
          />
        </label>
        <div>
          <label>
            Bio
            <textarea
              cols={30}
              rows={10}
              onChange={(event) => dispatch(setBio(event.target.value))}
            ></textarea>
          </label>
        </div>
        <button type="submit" onClick={addUser}>
          Create account
        </button>
      </ProfileForm>
    </ProfileWrapper>
  );
};

export default Profile;
