import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import { getCharacters } from '../../services/characters';

const Home: React.FC = () => {
  const [characters, setCharacters] = useState<[]>([]);
  const [currentPage] = useState<number>(1);

  useEffect(() => {
    getDataCharacters(currentPage);
  }, [currentPage]);

  console.log(characters);

  const getDataCharacters = async (page: number) => {
    const data = await getCharacters(page);
    setCharacters(data);
  }

  return (
    <Container>
      <h1>HOME</h1>
    </Container>
  );
}

export default Home;