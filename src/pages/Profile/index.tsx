/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import { ProfileTitle } from '../../components/ProfileTitle';
import { useAuth } from '../../hooks/useAuth';
import { ProfileCharacterCard } from '../../components/Card';
import { getCharacterById } from '../../services/characters';

const Profile: React.FC = () => {
  const [profile, setProfile] = useState<any>(null);
  const [agent, setAgent] = useState<any>(null);

  const data = window.localStorage.getItem('agent');

  useEffect(() => {
    if ( data !== null ) getById(JSON.parse(data!).value);
  }, [data]);

  const getById = async (id: number) => {
    const response = await getCharacterById(id);
    setProfile(response.data.results[0])
  }

  return (
    <Container>
      {profile ? (
        <>
          <ProfileTitle title="Perfil" symbol="/" username={profile?.name} />
          <ProfileCharacterCard profile={profile} />
        </>
      ) : (
        <h1>Carregando</h1>
      )}
    </Container>
  );
}

export { Profile };