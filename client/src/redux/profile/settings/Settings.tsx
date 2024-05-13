import React from "react";

import { useAppSelector } from "../../../common/hooks";
import Auth from "./components/Auth";
import Avatar from "./components/Avatar";
import FavoriteFilms from "./components/FavoriteFilms";
import ProfileForm from "./components/ProfileForm";
import ToggleMenu from "./components/ToggleMenu";
import { SettingsContainer } from "./Settings.styled";

const Settings = () => {
  const { settingsType } = useAppSelector((store) => store.profile);

  return (
    <SettingsContainer>
      <ToggleMenu />
      <h2>{settingsType}</h2>
      {settingsType === "profile" ? (
        <div>
          <ProfileForm />
          <FavoriteFilms />
        </div>
      ) : settingsType === "auth" ? (
        <Auth />
      ) : (
        <Avatar />
      )}
    </SettingsContainer>
  );
};

export default Settings;
