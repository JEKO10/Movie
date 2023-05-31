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

  const submit = () => {
    console.log(name, lastName, email, username, bio);
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
        <button type="submit" onClick={submit}>
          Create account
        </button>
      </ProfileForm>
    </ProfileWrapper>
  );
};

export default Profile;
