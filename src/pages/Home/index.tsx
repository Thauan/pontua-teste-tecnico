import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import { getCharacters } from '../../services/characters';
import CharacterCard from '../../components/CharacterCard';

const Home: React.FC = () => {
  const [characters, setCharacters] = useState<any>([]);
  const [currentPage] = useState<number>(2);

  useEffect(() => {
    getDataCharacters(currentPage);
  }, [currentPage]);

  console.log(characters?.results?.length > 0);

  const getDataCharacters = async (page: number) => {
    const response = await getCharacters(page);
    console.log(response.data)
    setCharacters(response.data);
  }

  return (
    <Container>
      {characters?.results?.length ? characters?.results?.map((character: any) => {
        return (
          <CharacterCard
            character={character}
          />
        )
      }) : (
        <h1>carregando</h1>
      )}
      {/* <h1>HOME</h1> */}
    </Container>
  );
}

export default Home;