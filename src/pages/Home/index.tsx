import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import { getCharacters } from '../../services/characters';

const Home: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [characters, setCharacters] = useState<any>([]);

  useEffect(() => {
    getData();
  }, []);

  console.log(characters);

  const getData = async () => {
    const data = await getCharacters();
    setCharacters(data);
  }
  return (
    <Container>
      <h1>HOME</h1>
    </Container>
  );
}

export default Home;