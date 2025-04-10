import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post("/users/signup", credentials);

      axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;

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

      axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
