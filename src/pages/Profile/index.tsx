/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Container } from './styles';
import { ProfileTitle } from '../../components/ProfileTitle';
import { useAuth } from '../../hooks/useAuth';
import { ProfileCharacterCard } from '../../components/Card';

const Profile: React.FC = () => {
  const { choosedAgent }: any = useAuth();

  return (
    <Container>
      <ProfileTitle title="Perfil" symbol="/" username={choosedAgent.label} />
      <ProfileCharacterCard profile={choosedAgent} />
    </Container>
  );
}

export { Profile };