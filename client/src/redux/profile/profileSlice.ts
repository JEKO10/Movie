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
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setRegister: (state, action: PayloadAction<RegisterInfo>) => {
      state.registerInfo = action.payload;
    },
  },
});

export const { setRegister } = profileSlice.actions;

export const { reducer } = profileSlice;
