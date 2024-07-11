import React from 'react';
import { Title, Container, Logo } from './styles';

export default function Index() {
  return (
    <Container>
      <Logo source={require('@/assets/logo.png')} resizeMode="contain" />
      <Title>Convide seus amigos e planeje a sua próxima viagem</Title>
    </Container>
  );
}
