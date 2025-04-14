import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const setAuthHeader = (value) => {
  axios.defaults.headers.common.Authorization = value;
};

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post("/users/signup", credentials);

      setAuthHeader(`Bearer ${response.data.token}`);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//snowy123day1@gmail.com
//day123456789

export const logIn = createAsyncThunk(
  "​/users​/login",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post("/users/login", credentials);

      setAuthHeader(`Bearer ${response.data.token}`);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk("auth/logout", async () => {
  await axios.post("/users/logout");
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {}
);
