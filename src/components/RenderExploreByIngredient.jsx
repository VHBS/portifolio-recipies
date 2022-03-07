import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import RecepiesContext from '../context/RecepiesContext';

const MAGIC_NUMBER = 12;

const ButtonIngredient = styled.button`
  background-color: rgba(34, 34, 34, 0);
  border-radius: 0;
  margin-bottom: 1em;
  margin-top: 1em;
  padding: 0;
  width: 100vw;

  img {
    width: 100vw;
  box-shadow: 0 10px 10px 1px rgba(0, 0, 0, 0.445);

  }

  h2 {
    position: absolute;
  backdrop-filter: blur(15px);
  background-color: rgba(255, 255, 255, 0.4);
  color: #fffffe;
  font-weight: 800;
  margin-inline: auto;
  padding: 0.2em 0;
  text-shadow: 0.05em 0.05em 1px rgba(0, 0, 0, 0.5);
  width: 100vw;
  }
`;

const ContainerIngredients = styled.div`
  margin-top: 1em;;
  margin-bottom: 4em;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export default function RenderExploreByIngredient() {
  const { fromExploreRecipes } = useContext(RecepiesContext);
  const history = useHistory();

  return (
    <ContainerIngredients>
      { fromExploreRecipes && fromExploreRecipes.meals
        ? fromExploreRecipes.meals.slice(0, MAGIC_NUMBER).map((e, i) => (
          <ButtonIngredient
            type="button"
            onClick={ () => history.push(`/foods/${e.idMeal}`) }
            data-testid={ `${i}-recipe-card` }
            key={ e.idMeal }
          >
            <h2 data-testid={ `${i}-card-name` }>{ e.strMeal }</h2>
            <img
              width="100vw"
              data-testid={ `${i}-card-img` }
              src={ e.strMealThumb }
              alt={ e.strMeal }
            />
          </ButtonIngredient>
        )) : null }
      { fromExploreRecipes && fromExploreRecipes.drinks
        ? fromExploreRecipes.drinks.slice(0, MAGIC_NUMBER).map((e, i) => (
          <ButtonIngredient
            type="button"
            data-testid={ `${i}-recipe-card` }
            key={ e.idDrink }
            value={ e.idDrink }
            onClick={ () => history.push(`/drinks/${e.idDrink}`) }
          >
            <h2 data-testid={ `${i}-card-name` }>{ e.strDrink }</h2>
            <img
              width="100vw"
              data-testid={ `${i}-card-img` }
              src={ e.strDrinkThumb }
              alt={ e.strDrink }
            />
          </ButtonIngredient>
        )) : null }
    </ContainerIngredients>
  );
}
