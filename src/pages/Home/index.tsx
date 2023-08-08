/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import { getCharacters } from '../../services/characters';
import CharacterCard from '../../components/CharacterCard';

const Home: React.FC = () => {
  const [characters, setCharacters] = useState<any>([]);
  const [currentPage] = useState<number>(1);

  useEffect(() => {
    getDataCharacters(currentPage);
  }, [currentPage]);


  const getDataCharacters = async (page: number) => {
    const response = await getCharacters(page);
    setCharacters(response.data);
  }

  const checkLastItems = (current: any, character: any) => {
    if (current == character) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <Container>
        {characters?.results?.length ? characters?.results?.map((character: any) => (
          <CharacterCard
            key={character.id}
            last={checkLastItems(character, characters?.results.at(-1))}
            penult={checkLastItems(character, characters?.results.at(-2))}
            character={character}
          />
        )) : (
          <h1>carregando</h1>
        )}
    </Container>
  );
}

export { Home };