import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  a: "a",
};

const singlePersonSlice = createSlice({
  name: "singlePerson",
  initialState,
  reducers: {},
});

export const { reducer } = singlePersonSlice;
