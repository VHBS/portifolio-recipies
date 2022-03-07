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

  .filter-food-by {
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

export default function ExplorerDrink() {
  const history = useHistory();

  const redirectToExpDrink = () => {
    history.push('/explore/drinks/ingredients');
  };

  const redirectToDrinkDetails = () => {
    history.push('/drinks/:id');
  };
  return (
    <div>
      <Header title="Explore Drinks" />
      <ButtonContainer>
        <button
          className="filter-food-by"
          data-testid="explore-by-ingredient"
          type="button"
          onClick={ redirectToExpDrink }
        >
          By Ingredient
        </button>
        <button
          className="filter-food-by"
          data-testid="explore-surprise"
          type="button"
          onClick={ redirectToDrinkDetails }
        >
          Surprise me!
        </button>
        <FooterMenu />
      </ButtonContainer>
    </div>);
}
