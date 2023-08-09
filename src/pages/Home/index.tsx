/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { getCharacters } from '../../services/characters';
import { CharacterCard } from '../../components/CharacterCard';
import { Container, Page, Pagination } from './styles';

const Home: React.FC = () => {
  const [characters, setCharacters] = useState<any>([]);
  const [pagination, setPagination] = useState<any>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    getDataCharacters(currentPage);
  }, [currentPage]);


  const getDataCharacters = async (page: number) => {
    const response = await getCharacters(page);

    setCharacters(response.data);
    setPagination(response.pagination);
  }

  const checkLastItems = (current: any, character: any) => {
    if (current == character) {
      return true;
    } else {
      return false;
    }
  }

  const getPageData = (page: any) => {
    getDataCharacters(page);
    setCurrentPage(page);
  }

  return (
    <>
      {characters?.results?.length ? (
        <>
          <Container>

            {characters?.results?.map((character: any) => (
              <CharacterCard
                key={character.id}
                last={checkLastItems(character, characters?.results.at(-1))}
                penult={checkLastItems(character, characters?.results.at(-2))}
                character={character}
              />
            ))}
          </Container>

          <Pagination>
            {[...Array(pagination.total)].map((_page: number, index: number) => {
              return (
                <Page key={index + 1} onClick={() => getPageData(index + 1)} isCurrent={index + 1 == currentPage}>
                  {index + 1}
                </Page>
              )
            })}
          </Pagination>
        </>
      ) : (
        <h1>carregando</h1>
      )}
    </>
  );
}

export { Home };