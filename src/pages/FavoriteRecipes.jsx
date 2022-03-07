import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import BackButton from '../components/BackButton';
import CardDoneRecipeDrink from '../components/CardDoneRecipeDrink';
import CardDoneRecipeFood from '../components/CardDoneRecipeFood';
import Header from '../components/Header';
import blackHeartIcon from '../images/blackHeartIcon.svg';

const ContainerButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 2em;
  margin-bottom: 0.5em;

  button {
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

const ContainerCard = styled.div`
  margin-top: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FavButton = styled.button`
  position: absolute;
  right: 1em;
  backdrop-filter: blur(15px);
  background-color: rgba(255, 255, 255, 0.4);
  padding: 0.5em;
  border-radius: 1em;
  z-index: 0;
  border: 0.01em solid #fffffe71;
  margin-top: 1em;
`;

const NoFavRecipesTitle = styled.h3`
  text-align: center;
  text-shadow: 0.05em 0.05em 1px rgba(0, 0, 0, 0.5);
  margin-top: 25vh;
`;

export default function FavoriteRecipes() {
  const [favoriteState, setFavoriteState] = useState([]);
  const [filterType, setFilterType] = useState('');

  useEffect(() => {
    const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (!favoriteRecipes) {
      return localStorage.setItem('favoriteRecipes', JSON.stringify([]));
    }
    setFavoriteState(favoriteRecipes);
  }, [setFavoriteState]);

  const desfavoriteClick = (param) => {
    const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
    const newFavoritesRecipes = favoriteRecipes.filter((item) => item.id !== param);
    localStorage.setItem('favoriteRecipes', JSON
      .stringify(newFavoritesRecipes));
    setFavoriteState(newFavoritesRecipes);
  };

  return (
    <div>
      <Header title="Favorite Recipes" />
      <BackButton />
      <ContainerButtons>
        <button
          data-testid="filter-by-all-btn"
          type="button"
          onClick={ () => setFilterType('') }
        >
          All
        </button>
        <button
          data-testid="filter-by-food-btn"
          type="button"
          onClick={ () => setFilterType('food') }
        >
          Food
        </button>
        <button
          data-testid="filter-by-drink-btn"
          type="button"
          onClick={ () => setFilterType('drink') }
        >
          Drinks
        </button>
      </ContainerButtons>
      { favoriteState.length > 0
        ? favoriteState.filter((item) => item.type.includes(filterType))
          .map((item, index) => (
            item.type === 'food'
              ? (
                <ContainerCard
                  key={ item.name + index }
                >
                  <FavButton
                    data-testid={ `${index}-horizontal-favorite-btn` }
                    type="button"
                    src={ blackHeartIcon }
                    onClick={ () => desfavoriteClick(item.id) }
                  >
                    <img src={ blackHeartIcon } alt={ item.name } />
                  </FavButton>
                  <CardDoneRecipeFood
                    recipe={ { item, index } }
                  />
                </ContainerCard>)
              : (
                <ContainerCard key={ item.name + index }>
                  <FavButton
                    data-testid={ `${index}-horizontal-favorite-btn` }
                    type="button"
                    src={ blackHeartIcon }
                    onClick={ () => desfavoriteClick(item.id) }
                  >
                    <img src={ blackHeartIcon } alt={ item.name } />
                  </FavButton>
                  <CardDoneRecipeDrink
                    recipe={ { item, index } }
                  />
                </ContainerCard>
              )
          ))
        : (
          <NoFavRecipesTitle>Nenhuma receita favoritada</NoFavRecipesTitle>
        )}
    </div>);
}
