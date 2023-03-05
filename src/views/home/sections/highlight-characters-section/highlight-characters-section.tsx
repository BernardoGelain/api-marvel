import { Container, Carousel } from "@/components";
import { CharacterCard } from "./components";
import { STATIC_CHARACTERS_DATA } from "./constants";
import { HighlightCharactersSectionContainer } from "./highlight-characters-section-styles";

export const HighlightCharactersSection = () => {
  return (
    <HighlightCharactersSectionContainer>
      <Container>
        <Carousel
          sliderOptions={{
            loop: true,
            breakpoints: {
              "(min-width: 400px)": {
                slides: { perView: 2, spacing: 30 },
              },
              "(min-width: 600px)": {
                slides: { perView: 3, spacing: 30 },
              },
              "(min-width: 750px)": {
                slides: { perView: 4, spacing: 30 },
              },
              "(min-width: 1000px)": {
                slides: { perView: 4.5, spacing: 30 },
              },
            },
            slides: { perView: 1, spacing: 30 },
          }}
          title="Personagens em destaque"
        >
          {STATIC_CHARACTERS_DATA.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </Carousel>
      </Container>
    </HighlightCharactersSectionContainer>
  );
};
