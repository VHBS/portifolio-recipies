import styled from 'styled-components';

export const FilterButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-bottom: 0.5em;
`;

export const FilterButton = styled.button`
  align-items: center;
  background-color: rgba(34, 34, 34, 0);
  border: 0.01em solid #fffffe44;
  border-radius: 0.5em;
  color: #fffffe;
  display: flex;
  flex-wrap: wrap;
  font-weight: 600;
  justify-content: center;
  margin: 0.2em 0;
  height: 4em;
  padding: 0 0.75em;
  text-shadow: 0.05em 0.05em 1px rgba(0, 0, 0, 0.5);
  width: 7.5em;
`;

export const TitleCardRecipes = styled.h1`
  position: absolute;
  backdrop-filter: blur(15px);
  background-color: rgba(255, 255, 255, 0.4);
  color: #fffffe;
  font-weight: 800;
  margin-inline: auto;
  padding: 0.2em 0;
  text-shadow: 0.05em 0.05em 1px rgba(0, 0, 0, 0.5);
  width: 100vw;
`;

export const ButtonCardRecipes = styled.button`
  background-color: rgba(34, 34, 34, 0);
  border-radius: 0;
  margin-bottom: 1em;
  margin-top: 1em;
  padding: 0;
  width: 100vw;
`;

export const ImageCardRecipes = styled.img`
  box-shadow: 0 10px 10px 1px rgba(0, 0, 0, 0.445);
  width: 100vw;
`;

export const DoneCardContainer = styled.div`
  margin-bottom: 2em;

  .link-done-card {
    background-color: rgba(255, 255, 255, 0);
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 10px 10px 1px rgba(0, 0, 0, 0.445);

    h3{
      margin-block: 0.5em;
    }    
  }
`;
