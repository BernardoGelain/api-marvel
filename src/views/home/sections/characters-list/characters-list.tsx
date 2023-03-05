import { Container, Pagination } from "@/components";
import { loadCharacters } from "@/services";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { CharacterCard } from "../highlight-characters-section/components";
import {
  CharactersListContainer,
  CharactersListTitle,
} from "./characters-list-styles";
import { CharacterCardSkeleton } from "./components";

export const CharactersList = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["characters", currentPage],
    queryFn: () =>
      loadCharacters({
        limit: 30,
        offset: 30 * currentPage,
      }),
    staleTime: 60 * 60, // 1 hour
    keepPreviousData: true,
  });

  return (
    <Container>
      <CharactersListTitle>Lista de personagens da Marvel</CharactersListTitle>
      <CharactersListContainer>
        {isLoading || isFetching
          ? Array.from({ length: 30 }).map((_, index) => (
              <CharacterCardSkeleton key={index} />
            ))
          : data?.results?.map((character) => (
              <CharacterCard
                key={character.id}
                character={character}
                variant="bottomText"
              />
            ))}
      </CharactersListContainer>
      <Pagination
        pageCount={data?.total as number}
        setCurrentPage={setCurrentPage}
      />
    </Container>
  );
};
