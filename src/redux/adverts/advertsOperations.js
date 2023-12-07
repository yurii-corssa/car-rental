import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://657099a609586eff6641af70.mockapi.io";

export const getAdverts = createAsyncThunk(
  "adverts/getAdverts",
  async ({ page = 1, limit = 12 }, thunkAPI) => {
    try {
      const res = await axios.get(`/adverts?page=${page}&limit=${limit}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCountAdverts = createAsyncThunk(
  "adverts/getCountAdverts",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("/adverts");
      return res.data.length;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
