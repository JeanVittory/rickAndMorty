import { characters } from "../models/characters.models";

export const charactersAdapter = (characters: any):characters => {
  const formattedResponse = characters.map((character: any) => {
    const obj:characters = {
      id: character.id,
      name: character.name,
      image: character.image,
      status: character.status,
      species: character.species,
    };
    return obj;
  });
  return formattedResponse
};
