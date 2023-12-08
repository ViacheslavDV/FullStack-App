import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFilter } from "./filter.interface";
import { EMusicFilters } from "@/app/types/music/song-object.interface";

const initialState: IFilter = {
  sort: EMusicFilters.OLDEST,
  search: "",
  page: 1,
  perPage: 10,
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilters: (state, action: PayloadAction<IFilter>) => {
      state.sort = action.payload.sort;
      state.search = action.payload.search;
      state.page = action.payload.page;
      state.perPage = action.payload.perPage;
    },
    clearFilters: (state) => {
      state.sort = EMusicFilters.OLDEST;
      state.search = "";
      state.page = 1;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const filterActions = filterSlice.actions;
