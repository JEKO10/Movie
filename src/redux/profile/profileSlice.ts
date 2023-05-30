import { createSlice } from "@reduxjs/toolkit";

import { InitialProfile } from "../../common/types/typesTS";

const initialState: InitialProfile = {
  username: "",
  name: "",
  lastName: "",
  email: "",
  bio: "",
};

type ProfilePayload = {
  payload: string;
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setUsername: (state, { payload }: ProfilePayload) => {
      state.username = payload;
    },
    setName: (state, { payload }: ProfilePayload) => {
      state.name = payload;
    },
    setLastName: (state, { payload }: ProfilePayload) => {
      state.lastName = payload;
    },
    setEmail: (state, { payload }: ProfilePayload) => {
      state.email = payload;
    },
    setBio: (state, { payload }: ProfilePayload) => {
      state.bio = payload;
    },
  },
});

export const {
  setUsername,
  setName,
  setLastName,
  setEmail,
  setBio,
} = profileSlice.actions;

export const { reducer } = profileSlice;
