import styled from 'styled-components';

export const StyledLoginContainer = styled.div`
  align-items: center;
  color: #0f0e17;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: flex-end;
  width: 100vw;
`;
export const StyledTitle = styled.h1`
  color: #fffffe;
  font-size: 2em;
  margin-bottom: 2em;
`;

export const StyledInputsContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 12em;
  justify-content: space-evenly;
  margin-bottom: 10em;
  width: 100vw;
`;

export const StyledInput = styled.input`
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 0.5em;
  font-size: 1.2em;
  padding: 0.5em;
  width: 60%;
  color: black;
`;

export const StyledButton = styled.button`
  border-radius: 0.5em;
  font-weight: 600;
  padding: 0.75em;
  color: black;

  &:disabled {
    color: rgba(255, 255, 255, 0.1);
  }

  &:active {
    background-color: #0f0e17;
    transform: scale(0.98);
  }
`;
