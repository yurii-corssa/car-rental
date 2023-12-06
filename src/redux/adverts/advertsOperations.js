import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://657099a609586eff6641af70.mockapi.io";

export const getAdverts = createAsyncThunk(
  "adverts/getAdverts",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("/adverts");
      console.log(res);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
