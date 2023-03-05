import { Container, Footer, Header, PageLoading } from "@/components";
import { makeCharacterImageSrc } from "@/helpers";
import { CharacterModel } from "@/models";
import { loadCharacterByName } from "@/services";
import { useQuery } from "@tanstack/react-query";
import {
  CharacterDetailsContainer,
  CharacterDetailsDescription,
  CharacterDetailsImage,
  CharacterDetailsTitle,
} from "./character-details-page-styles";

type Props = {
  name: string;
};

const CharacterPage = ({ name }: Props) => {
  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["characterName"],
    refetchOnWindowFocus: false,
    queryFn: () =>
      loadCharacterByName({
        name: name as string,
      }),
  });

  const character = data as CharacterModel;

  if (isLoading || isFetching) return <PageLoading />;

  return (
    <>
      <Header />
      <CharacterDetailsContainer>
        <Container>
          {isLoading || isFetching ? (
            <i>carregando...</i>
          ) : (
            <>
              {Boolean(character?.thumbnail) && (
                <CharacterDetailsImage
                  src={makeCharacterImageSrc(character)}
                  width={300}
                  height={300}
                  alt={`An image of ${character?.name}`}
                />
              )}
              <CharacterDetailsTitle>{character?.name}</CharacterDetailsTitle>
              <CharacterDetailsDescription>
                {character?.description || "Descrição não existe"}
              </CharacterDetailsDescription>
            </>
          )}
        </Container>
      </CharacterDetailsContainer>
      <Footer />
    </>
  );
};

export default CharacterPage;
