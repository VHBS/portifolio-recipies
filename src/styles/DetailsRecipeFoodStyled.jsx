import styled from 'styled-components';

export const ImageDetailsStyled = styled.img`
  width: 100vw;
`;

export const TitleDetailsStyled = styled.h2`
  backdrop-filter: blur(15px);
  background-color: rgba(34, 34, 34, 0.3);
  /* background-color: rgba(255, 255, 255, 0.4); */
  position: absolute;
  text-align: center;
  /* top: 13.5em; */
  margin-top: -1.7em;
  width: 100vw;
  padding: 0.2em 0;
  z-index: 0;
  color: #fffffe;
`;

export const ContentContainerStyled = styled.div`
  h3 {
    text-align: center;
    margin: 0.5em auto ;
    margin-top: 1em;
    color: #fffffe;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  }

  p {
    margin: 0.2em auto ;
    width: 90vw;
    display: flex;
    justify-content: space-evenly;
    color: #fffffe;
  }

  .instructions {
    text-align: justify;
    line-height: 1.3em;
    margin-bottom: 2em;
    color: #fffffe;
  }

  .pgrogress-inputs {
    width: 90vw;
    margin: 1em auto;
    margin-bottom: 4em;;
    color: #fffffe;
    display: flex;
    flex-direction: column;

    label {
      margin-block: 0.5em
    }

    input {
      margin-right: 1em;
    }
  }
`;

export const VideoStyled = styled.iframe`
  width: 100%;
  height: 12.6em;
`;

export const TitleRecomendationStyled = styled.h2`
  backdrop-filter: blur(15px);
  background-color: rgba(34, 34, 34, 0.3);
  /* background-color: rgba(255, 255, 255, 0.4); */
  color: #fffffe;
  text-align: center;
  width: 100vw;
  padding: 0.2em 0;
  z-index: 1;
`;

export const ArrowsStyled = styled.div`
  margin-top: 1.5em;
  margin-bottom: 0.5em;
  display: flex;
  align-items: center;
  color: #fffffe;
  text-align: center;
  width: 100vw;
  z-index: 2;

  h3 {
    margin: 0;
  }

  p {
    font-weight: 600;
  }
`;

export const ButtonStyled = styled.button`
  bottom: 0;
  position: fixed;
  backdrop-filter: blur(15px);
  background-color: rgba(34, 34, 34, 0.3);
  left: 50%;
  transform: translateX(-50%);
  padding: 1em;
  border: 0.01em solid #fffffe7e;
  border-radius: 1em 1em 0 0;
  color: #fffffe;
  z-index: 2;
  font-weight: 600;


  &:disabled {
  color: #fffffe6c;
  }
`;
