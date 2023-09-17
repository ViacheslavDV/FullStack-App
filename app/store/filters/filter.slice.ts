import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFilter } from "./filter.interface";
import { EMusicFilters } from "@/app/types/music/song-object.interface";

const initialState: IFilter = {
  sort: EMusicFilters.OLDEST,
  search: "",
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilters: (state, action: PayloadAction<IFilter>) => {
      state.sort = action.payload.sort;
      state.search = action.payload.search;
    },
    clearFilters: (state) => {
      state.sort = EMusicFilters.OLDEST;
      state.search = "";
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const filterActions = filterSlice.actions;
