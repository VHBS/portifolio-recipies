import React from 'react';
import styled from 'styled-components';
import CardRecepies from '../components/CardRecepies';
import FooterMenu from '../components/FooterMenu';
import Header from '../components/Header';

const StyledBody = styled.div`
  color: black;
`;

export default function PrincipalDrinkPage() {
  return (
    <StyledBody>
      <Header title="Drinks" search />
      <CardRecepies />
      <FooterMenu />
    </StyledBody>
  );
}
