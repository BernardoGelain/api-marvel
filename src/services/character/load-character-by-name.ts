import { marvelApi } from "@/lib/axios";
import { CharacterModel } from "@/models";

type LoadCharacterParams = {
  name: string;
};

type LoadCharactersResponse = CharacterModel;

export const loadCharacterByName = async ({
  name,
}: LoadCharacterParams): Promise<LoadCharactersResponse> => {
  const response = await marvelApi.get("/characters", {
    params: {
      nameStartsWith: name,
    },
  });

  return response.data.data.results?.[0];
};
