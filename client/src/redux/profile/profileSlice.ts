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
  favoriteMovieId: 0,
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
    setFavoriteMovieId: (state, { payload }: PayloadAction<number>) => {
      state.favoriteMovieId = payload;
    },
  },
});

export const {
  setRegister,
  setIsLoggedIn,
  setIsFavoriteOpen,
  setSettingsType,
  setFavoriteMovieId,
} = profileSlice.actions;

export const { reducer } = profileSlice;
