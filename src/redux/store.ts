import { configureStore } from "@reduxjs/toolkit";
import allCharacters from "./charactersSlice/characterSlice.redux";
import paginationState from "./paginationSlice/paginationSlice.redux";
import singleCharacterState from "./singleCharacterSlice/singleCharacterSlice.redux";

export const reduxStore = configureStore({
  reducer: {
    allCharacters: allCharacters,
    pagination: paginationState,
    singleCharacter: singleCharacterState,
  },
});
