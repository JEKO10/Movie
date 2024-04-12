import React from "react";

import poster from "../../assets/images/poster.jpg";
import { ProfileForm, ProfileName, SettingsContainer } from "./Profile.styled";

const Settings = () => {
  return (
    <SettingsContainer>
      <ProfileForm>
        <h2>Account Settings</h2>
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
          Name
          <input type="email" />
        </label>
        <ProfileName>
          <label>
            Location
            <input type="text" />
          </label>
          <label>
            Website
            <input type="text" />
          </label>
        </ProfileName>
        <label>
          Bio
          <textarea cols={30} rows={10} />
        </label>
        <button type="submit">Save changes</button>
      </ProfileForm>
      <article>
        <h2>Favorite Films</h2>
        <div>
          <img src={poster} alt="poster" />
          <img src={poster} alt="poster" />
          <img src={poster} alt="poster" />
          <img src={poster} alt="poster" />
        </div>
      </article>
    </SettingsContainer>
  );
};

export default Settings;
