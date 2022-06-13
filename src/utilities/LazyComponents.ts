import { lazy } from "react";

export const AllCharactersContainer = lazy(() =>
  import("../Pages/charactersContainer/AllCharactersContainer.pages").then(
    ({ AllCharactersContainer }) => ({ default: AllCharactersContainer })
  )
);
export const SingleCharacterContainer = lazy(() =>
  import(
    "../Pages/singleCharacterContainer/SingleCharacterContainer.pages"
  ).then(({ SingleCharacterContainer }) => ({
    default: SingleCharacterContainer,
  }))
);
