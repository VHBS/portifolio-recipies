import React from 'react';
import { BsArrowLeftCircle } from 'react-icons/bs';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 4.5em;
  border-radius: 0.5em;
  padding: 0.5em;
  backdrop-filter: blur(15px);
  background-color: rgba(34, 34, 34, 0.1);
  position: fixed;
  top: 1.7em;
  left: 1em;
  z-index: 1;
  border: 0.01em solid #fffffe71;
  color: #fffffe;
  font-weight: 600;
  box-shadow: 0.1em 0.1em 1.5px rgba(0, 0, 0, 0.5);
`;

export default function BackButton() {
  const history = useHistory();
  return (
    <ButtonStyled
      onClick={ history.goBack }
      type="button"
    >
      <BsArrowLeftCircle />
      back
    </ButtonStyled>
  );
}
