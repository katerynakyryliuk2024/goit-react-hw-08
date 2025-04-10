import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post("/users/signup", credentials);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//snow@gmail.com
