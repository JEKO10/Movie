import React from "react";

import {
  ProfileForm,
  ProfileName,
  ProfileWrapper,
} from "../../assets/style/Profile.styled";

const Profile = () => {
  return (
    <ProfileWrapper>
      <h2>Profile</h2>
      <ProfileForm>
        <label>
          Username
          <input type="text" />
        </label>
        <ProfileName>
          <label>
            Name
            <input type="text" />
          </label>
          <label>
            Last name
            <input type="text" />
          </label>
        </ProfileName>
        <label>
          Email address
          <input type="text" />
        </label>
        <div>
          <label>
            Bio
            <textarea cols={30} rows={10}></textarea>
          </label>
        </div>
        <button type="submit">Create account</button>
      </ProfileForm>
    </ProfileWrapper>
  );
};

export default Profile;
