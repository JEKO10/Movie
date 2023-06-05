import axios from "axios";
import React from "react";

import {
  FormContainer,
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
      .then(() => {
        console.log("success");
      });
  };

  return (
    <ProfileWrapper>
      <FormContainer>
        <ProfileForm>
          <h2>Create an account</h2>
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
              type="email"
              onChange={(event) => dispatch(setEmail(event.target.value))}
            />
          </label>
          <label>
            Password
            <input type="text" />
          </label>
          <label>
            Bio
            <textarea
              cols={30}
              rows={10}
              onChange={(event) => dispatch(setBio(event.target.value))}
            ></textarea>
          </label>
          <button type="submit" onClick={addUser}>
            Create account
          </button>
        </ProfileForm>
        <p>or</p>
        <ProfileForm>
          <h2>Log in</h2>
          <label>
            Email or username
            <input type="text" />
          </label>
          <label>
            Password
            <input type="text" />
          </label>
        </ProfileForm>
      </FormContainer>
    </ProfileWrapper>
  );
};

export default Profile;
