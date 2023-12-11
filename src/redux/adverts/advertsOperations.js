import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://657099a609586eff6641af70.mockapi.io";

export const getAdverts = createAsyncThunk(
  "adverts/getAdverts",
  async ({ page = 1, itemsPerPage, make = "" }, thunkAPI) => {
    try {
      const res = await axios.get(
        `/adverts?page=${page}&limit=${itemsPerPage}&make=${make}`
      );
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCountAdverts = createAsyncThunk(
  "adverts/getCountAdverts",
  async ({ make }, thunkAPI) => {
    try {
      const res = await axios.get(`/adverts?make=${make}`);

      return res.data.length;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getAllMake = createAsyncThunk(
  "adverts/getAllMake",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("/adverts");

      const allMake = res.data
        .map((advert) => advert.make)
        .reduce((prevArr, make) => {
          if (prevArr.includes(make)) {
            return prevArr;
          }
          prevArr.push(make);
          return prevArr;
        }, []);

      return allMake;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
