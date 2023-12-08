import { persistReducer } from "redux-persist";
import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { getAdverts, getCountAdverts } from "./advertsOperations";

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const advertsSlices = createSlice({
  name: "adverts",
  initialState: {
    items: [],
    countItems: 0,
    itemsPerPage: 12,
    favoritesItems: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    toggleFavorite({ favoritesItems }, { payload }) {
      if (favoritesItems.includes(payload)) {
        favoritesItems = favoritesItems.filter((item) => item !== payload);
      } else {
        favoritesItems.push(payload);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAdverts.pending, handlePending)
      .addCase(getAdverts.rejected, handleRejected)
      .addCase(getAdverts.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getCountAdverts.pending, (state) => {
        state.error = null;
      })
      .addCase(getCountAdverts.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(getCountAdverts.fulfilled, (state, { payload }) => {
        state.countItems = payload;
        state.error = null;
      });
  },
});

export const { toggleFavorite } = advertsSlices.actions;

const persistConfig = {
  key: "adverts",
  storage,
};

export const advertsPersistReducer = persistReducer(
  persistConfig,
  advertsSlices.reducer
);
