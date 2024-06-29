import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "GPT",
  initialState: {
    gptToggle: false,
    movieNames: null,
    movieList: null,
  },
  reducers: {
    toggleGPT: (state) => {
      state.gptToggle = !state.gptToggle;
    },
    addMoviesNameAndList: (state, action) => {
      const { movieNames, movieList } = action.payload;
      state.movieNames = movieNames;
      state.movieList = movieList;
    },
  },
});
export const { toggleGPT, addMoviesNameAndList } = gptSlice.actions;
export default gptSlice.reducer;
