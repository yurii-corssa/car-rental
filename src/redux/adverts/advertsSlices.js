import { persistReducer } from "redux-persist";
import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { getAdverts } from "./advertsOperations";

const handlePending = (state) => {
  state.isLoading = true;
  state.advertsError = null;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.advertsError = payload;
};

const advertsSlices = createSlice({
  name: "adverts",
  initialState: {
    items: [],
    isLoading: false,
    advertsError: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAdverts.pending, handlePending)
      .addCase(getAdverts.rejected, handleRejected)
      .addCase(getAdverts.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.isLoading = false;
        state.advertsError = null;
      });
  },
});

const persistConfig = {
  key: "adverts",
  storage,
};

export const advertsPersistReducer = persistReducer(
  persistConfig,
  advertsSlices.reducer
);
