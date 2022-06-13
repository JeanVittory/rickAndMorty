import { singleCharacterModel } from "../models/singleCharacter.models";

export const singleCharacterAdapater = (character: any):singleCharacterModel => {
  const formattedData = {
    id: character.id,
    name: character.name,
    image: character.image,
    gender: character.gender,
    status: character.status,
    species: character.species,
    type: character.type,
    origin: character.origin.name,
    location: character.location.name
  };
  return formattedData;
};
