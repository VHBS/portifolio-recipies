import React, { useEffect, useState } from 'react';
import BackButton from '../components/BackButton';
import CardDoneRecipeDrink from '../components/CardDoneRecipeDrink';
import CardDoneRecipeFood from '../components/CardDoneRecipeFood';
import Header from '../components/Header';
import { FilterButtonsContainer, FilterButton } from '../styles/CardRecipesStyle';

export default function DoneRecipes() {
  const [doneRecipesState, setDoneRecipesState] = useState([]);

  useEffect(() => {
    const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
    if (doneRecipes) {
      setDoneRecipesState(doneRecipes);
    }
  }, [setDoneRecipesState]);

  const filterByAll = () => {
    const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
    setDoneRecipesState(doneRecipes);
  };

  const filterByFood = () => {
    const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'))
      .filter((item) => item.type === 'food');
    setDoneRecipesState(doneRecipes);
  };

  const filterByDrink = () => {
    const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'))
      .filter((item) => item.type === 'drink');
    setDoneRecipesState(doneRecipes);
  };

  return (
    <div>
      <Header title="Done Recipes" />
      <BackButton />
      <FilterButtonsContainer>
        <FilterButton
          data-testid="filter-by-all-btn"
          type="button"
          onClick={ filterByAll }
        >
          All
        </FilterButton>
        <FilterButton
          data-testid="filter-by-food-btn"
          type="button"
          onClick={ filterByFood }
        >
          Food
        </FilterButton>
        <FilterButton
          data-testid="filter-by-drink-btn"
          type="button"
          onClick={ filterByDrink }
        >
          Drinks
        </FilterButton>
      </FilterButtonsContainer>
      { doneRecipesState.length > 0
        && doneRecipesState.map((item, index) => (
          item.type === 'food'
            ? (
              <CardDoneRecipeFood
                key={ item.name + index }
                recipe={ { item, index } }
              />)
            : (
              <CardDoneRecipeDrink
                key={ item.name + index }
                recipe={ { item, index } }
              />)
        ))}
    </div>);
}
