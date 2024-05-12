import React, { useState } from "react";
import { FaCirclePlus } from "react-icons/fa6";

import { useAppDispatch, useAppSelector } from "../../../common/hooks";
import { setIsFavoriteOpen } from "../profileSlice";
import {
  FavoriteFilms,
  ProfileForm,
  ProfileName,
  RemoveMovie,
  SettingsContainer,
} from "./Settings.styled";
import ToggleMenu from "./ToggleMenu";

const Settings = () => {
  const [movieIndex, setMovieIndex] = useState<number>(0);
  const { settingsType } = useAppSelector((store) => store.profile);
  const dispatch = useAppDispatch();

  const handleClick = (index: number) => {
    setMovieIndex(index);

    dispatch(setIsFavoriteOpen(true));
  };

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
        <FavoriteFilms>
          <h3>Favorite Films</h3>
          <ul>
            <li onClick={() => handleClick(0)}>
              <RemoveMovie />
              <FaCirclePlus />
            </li>
            <li onClick={() => handleClick(1)}>
              <RemoveMovie />
              <FaCirclePlus />
            </li>
            <li onClick={() => handleClick(2)}>
              <RemoveMovie />
              <FaCirclePlus />
            </li>
            <li onClick={() => handleClick(3)}>
              <RemoveMovie />
              <FaCirclePlus />
            </li>
          </ul>
        </FavoriteFilms>
      </div>
    </SettingsContainer>
  );
};

export default Settings;
