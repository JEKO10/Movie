import React from "react";
import { FaCirclePlus } from "react-icons/fa6";

import {
  FavoriteFilms,
  ProfileForm,
  ProfileName,
  SettingsContainer
} from "./Settings.styled";

const Settings = () => {
  return (
    <SettingsContainer>
      <h2>Profile</h2>
      <div>
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
        <FavoriteFilms>
          <h3>Favorite Films</h3>
          <ul>
            <li>
              <FaCirclePlus />
            </li>
            <li>
              <FaCirclePlus />
            </li>
            <li>
              <FaCirclePlus />
            </li>
            <li>
              <FaCirclePlus />
            </li>
          </ul>
        </FavoriteFilms>
      </div>
    </SettingsContainer>
  );
};

export default Settings;
