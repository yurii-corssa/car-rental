import { persistReducer } from "redux-persist";
import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { getAdverts, getAllMake, getCountAdverts } from "./advertsOperations";

const initialState = {
  items: [],
  countItems: 0,
  itemsPerPage: 12,
  filter: { make: "" },
  allMake: [],
  favoritesItems: [],
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, { error }) => {
  state.isLoading = false;
  state.error = error;
};

const advertsSlices = createSlice({
  name: "adverts",
  initialState,
  reducers: {
    toggleFavorite(state, { payload }) {
      if (state.favoritesItems.includes(payload)) {
        state.favoritesItems = state.favoritesItems.filter(
          (item) => item !== payload
        );
      } else {
        state.favoritesItems.push(payload);
      }
    },
    setItemsPerPage(state, { payload }) {
      state.itemsPerPage = payload;
    },
    setFilter(state, { payload }) {
      state.filter = payload;
    },
    resetAdvertsState(state) {
      state.items = initialState.items;
      state.countItems = initialState.countItems;
      state.itemsPerPage = initialState.itemsPerPage;
      state.filter = initialState.filter;
      state.allMake = initialState.allMake;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAdverts.pending, handlePending)
      .addCase(getAdverts.rejected, handleRejected)
      .addCase(getAdverts.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.isLoading = false;
      })
      .addCase(getCountAdverts.pending, (state) => {
        state.error = null;
      })
      .addCase(getCountAdverts.rejected, (state, { error }) => {
        state.error = error;
      })
      .addCase(getCountAdverts.fulfilled, (state, { payload }) => {
        state.countItems = payload;
      })
      .addCase(getAllMake.pending, (state) => {
        state.error = null;
      })
      .addCase(getAllMake.rejected, (state, { error }) => {
        state.error = error;
      })
      .addCase(getAllMake.fulfilled, (state, { payload }) => {
        state.allMake = payload;
      });
  },
});

export const { toggleFavorite, setFilter, setItemsPerPage, resetAdvertsState } =
  advertsSlices.actions;

const persistConfig = {
  key: "adverts",
  storage,
};

export const advertsPersistReducer = persistReducer(
  persistConfig,
  advertsSlices.reducer
);
