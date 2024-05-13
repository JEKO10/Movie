import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { InitialProfile, RegisterInfo } from "../../common/types/typesTS";

const initialState: InitialProfile = {
  registerInfo: {
    username: "",
    name: "",
    lastName: "",
    email: "",
    bio: "",
  },
  isLoggedIn: false,
  isFavoriteOpen: false,
  settingsType: "profile",
  favoriteMovie: 0,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setRegister: (state, action: PayloadAction<RegisterInfo>) => {
      state.registerInfo = action.payload;
    },
    setIsLoggedIn: (state, { payload }: PayloadAction<boolean>) => {
      state.isLoggedIn = payload;
    },
    setIsFavoriteOpen: (state, { payload }: PayloadAction<boolean>) => {
      state.isFavoriteOpen = payload;
    },
    setSettingsType: (state, { payload }: PayloadAction<string>) => {
      state.settingsType = payload;
    },
    setFavoriteMovie: (state, { payload }: PayloadAction<number>) => {
      state.favoriteMovie = payload;
    },
  },
});

export const {
  setRegister,
  setIsLoggedIn,
  setIsFavoriteOpen,
  setSettingsType,
  setFavoriteMovie,
} = profileSlice.actions;

export const { reducer } = profileSlice;
