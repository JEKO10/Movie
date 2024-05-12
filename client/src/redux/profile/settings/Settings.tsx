import React from "react";

import { useAppSelector } from "../../../common/hooks";
import FavoriteFilms from "./components/FavoriteFilms";
import ToggleMenu from "./components/ToggleMenu";
import { ProfileForm, ProfileName, SettingsContainer } from "./Settings.styled";

const Settings = () => {
  const { settingsType } = useAppSelector((store) => store.profile);

  return (
    <SettingsContainer>
      <ToggleMenu />
      <h2>{settingsType}</h2>
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
        <FavoriteFilms />
      </div>
    </SettingsContainer>
  );
};

export default Settings;
