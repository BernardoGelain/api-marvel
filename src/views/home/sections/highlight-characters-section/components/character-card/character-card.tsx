import { CharacterModel } from "@/models";
import {
  BottomTextWrapper,
  CardCenterText,
  CardDivider,
  CardName,
  CardBottomText,
  CardImageCenterText,
  CardImageBottomText,
  CardDividerCenterText,
} from "./character-card-styles";

type Props = {
  variant?: "centerText" | "bottomText";
  character: CharacterModel;
};

export const CharacterCard = ({ variant = "centerText", character }: Props) => {
  if (!character) return null;

  const variants = {
    centerText: (
      <CardCenterText href={`/character/${character?.name}`}>
        <CardName>{character.name}</CardName>
        <CardImageCenterText
          src={character?.imageUrl}
          width={250}
          height={330}
          alt={`The image of ${character.name}`}
        />
        <CardDividerCenterText />
      </CardCenterText>
    ),
    bottomText: (
      <CardBottomText href={`/character/${character?.name}`}>
        <CardImageBottomText
          src={character?.imageUrl}
          width={170}
          height={190}
          alt={`The image of ${character.name}`}
        />
        <CardDivider />
        <BottomTextWrapper>{character.name}</BottomTextWrapper>
      </CardBottomText>
    ),
  };

  return variants[variant];
};
