import { loadAbort } from "../utilities/loadAbort.utilities";
import { globalCharacterReturn } from "../models/globalCharacter.models";

export const globalCharacters = (page: number): globalCharacterReturn => {
  const controller: AbortController = loadAbort();
  return {
    call: fetch(`https://rickandmortyapi.com/api/character/?page=${page}`, {
      signal: controller.signal,
    }),
    controller,
  };
};

export const singleCharacter = (id: string) => {
  const controller: AbortController = loadAbort();
  return {
    call: fetch(`https://rickandmortyapi.com/api/character/${id}`, {
      signal: controller.signal,
    }),
    controller,
  };
};
