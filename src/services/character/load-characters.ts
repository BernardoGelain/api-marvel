import { makeCharacterImageSrc } from "@/helpers";
import { marvelApi } from "@/lib/axios";
import { CharacterModel } from "@/models";

type LoadCharactersParams = {
  offset?: number;
  limit?: number;
};

type LoadCharactersResponse = {
  results: CharacterModel[];
  total: number;
};

export const loadCharacters = async ({
  limit = 30,
  offset = 0,
}: LoadCharactersParams): Promise<LoadCharactersResponse> => {
  const response = await marvelApi.get("/characters", {
    params: {
      limit,
      offset,
    },
  });

  const formattedResults = response.data.data.results.map(
    (character: CharacterModel) => ({
      ...character,
      imageUrl: makeCharacterImageSrc(character),
    })
  );

  return {
    results: formattedResults,
    total: response.data.data.total / limit,
  };
};
