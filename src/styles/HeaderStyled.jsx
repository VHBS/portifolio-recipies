import styled from 'styled-components';

export const HeaderStyled = styled.header`
  background: linear-gradient(0deg, rgba(195, 34, 34, 0) 0%, rgb(255, 136, 0) 100%);
  height: 5em;
`;

export const TitleHeaderStyled = styled.h1`
  color: #fffffe;
  left: 50%;
  position: absolute;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  top: 0.6em;
  transform: translateX(-50%);
  width: 58vw;
  text-align: center;
`;

export const LabelStyled = styled.label`
  padding: 0.2em;
  margin-block: 0.5em;
`;

export const ProfileButtonStyled = styled.button`
  backdrop-filter: blur(15px);
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 50%;
  box-shadow: 0.1em 0.1em 1.5px rgba(0, 0, 0, 0.5);
  font-weight: 600;
  padding: 0.75em;
  position: absolute;
  right: 1em;
  top: 1em;
  z-index: 1;

  &:active {
    background-color: #5e5e5e6f;
    transform: scale(0.98);
  }
`;

export const SearchShowStyled = styled.div`
  align-items: center;
  display: flex;
`;

export const SearchButtonStyled = styled.button`
  backdrop-filter: blur(15px);
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 50%;
  box-shadow: 0.1em 0.1em 1.5px rgba(0, 0, 0, 0.5);
  margin-left: 1em;
  margin-top: 1em;
  padding: 0.75em;
`;

export const SearchInputsContainerStyled = styled.div`
  backdrop-filter: blur(15px);
  background-color: rgba(34, 34, 34, 0.1);
  border: 0.01em solid #fffffe7e;
  border-radius: 0.2em;
  color: #fffffe;
  display: flex;
  flex-direction: column;
  font-weight: 400;
  left: 50%;
  padding: 2em;
  position: fixed;
  text-shadow: 0.05em 0.05em 1px rgba(0, 0, 0, 0.5);
  top: 33vh;
  transform: translateX(-50%);
  z-index: 1;
`;

export const SearchInputStyled = styled.input`
  border: 0.1em solid #ff7b009c;
  border-radius: 0.2em;
  font-size: 1.1em;
  height: 0.5em;
  padding: 0.5em 0.35em;
  width: 50vw;
`;

export const RadioInputsContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 8em;
  justify-content: space-evenly;
  margin-left: 20%;
`;

export const InputRadioStyled = styled.input`
  margin-right: 1em;
`;

export const SearchButtonFilterStyled = styled.button`
backdrop-filter: blur(15px);
  background-color: rgba(34, 34, 34, 0.1);
  border: 0.01em solid #fffffe44;
  border-radius: 0.5em;
  color: #fffffe;
  margin-block-end: 1em;
  padding: 0.75em;
  text-shadow: 0.05em 0.05em 1px rgba(0, 0, 0, 0.5);
`;
