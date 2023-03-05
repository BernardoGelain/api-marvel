import { CharacterModel } from "@/models";

export const makeCharacterImageSrc = (character: CharacterModel) => {
  if (!character.thumbnail) return "";
  const { path, extension } = character.thumbnail;
  return `${path}.${extension}`;
};
