import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IInitialMusicState } from "./music.interface";
import { ISong } from "@/app/types/music/song.interface";

const initialState: IInitialMusicState = {
  song: null,
};

export const musicSlice = createSlice({
  name: "music",
  initialState,
  reducers: {
    setActiveSong: (state, action: PayloadAction<ISong>) => {
      state.song = action.payload;
    },
  },
});

export const musicReducer = musicSlice.reducer;
export const musicActions = musicSlice.actions;
