import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import FooterMenu from '../components/FooterMenu';
import Header from '../components/Header';

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-block: 30vh;


  .filter-button-explore {
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
  }
`;

export default function ExplorerPage() {
  const history = useHistory();

  const redirectToFoods = () => {
    history.push('/explore/foods');
  };

  const redirectToDrinks = () => {
    history.push('/explore/drinks');
  };

  return (
    <div>
      <Header title="Explore" />
      <ButtonContainer>
        <button
          className="filter-button-explore"
          data-testid="explore-foods"
          type="button"
          onClick={ redirectToFoods }
        >
          Explore Foods
        </button>
        <button
          className="filter-button-explore"
          data-testid="explore-drinks"
          type="button"
          onClick={ redirectToDrinks }
        >
          Explore Drinks
        </button>
        <FooterMenu />
      </ButtonContainer>
    </div>
  );
}
