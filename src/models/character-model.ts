export type CharacterModel = {
  id: number;
  name: string;
  description?: string;
  imageUrl: string;
  thumbnail?: {
    path: string;
    extension: string;
  };
};
