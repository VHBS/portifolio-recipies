import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import styled from 'styled-components';

const ButtonStyled = styled.button`
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
`;

export default function StartButton() {
  const [recepieInProgress, setRecepieInProgress] = useState(false);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const recepiesInProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (!recepiesInProgress) {
      const startNewRecepie = { meals: {}, cocktails: {} };
      localStorage.setItem('inProgressRecipes', JSON.stringify(startNewRecepie));
      return setRecepieInProgress(false);
    }
    if (history.location.pathname.includes('foods')
      && recepiesInProgress.meals[id] !== undefined) {
      return setRecepieInProgress(true);
    }
    if (history.location.pathname.includes('drinks')
      && recepiesInProgress.cocktails[id] !== undefined) {
      return setRecepieInProgress(true);
    }
  }, [history.location.pathname, id]);

  const foodRecepieProgress = () => {
    history.push(`/foods/${id}/in-progress`);
    const recepiesInProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
    const startNewRecepie = { ...recepiesInProgress,
      meals: { ...recepiesInProgress.meals, [id]: [] },
    };
    localStorage.setItem('inProgressRecipes', JSON.stringify(startNewRecepie));
  };

  const drinkRecepieProgress = () => {
    history.push(`/drinks/${id}/in-progress`);
    const recepiesInProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
    const startRecepie = { ...recepiesInProgress,
      cocktails: { ...recepiesInProgress.cocktails, [id]: [] } };
    localStorage.setItem('inProgressRecipes', JSON.stringify(startRecepie));
  };

  const handleClick = () => {
    if (history.location.pathname.includes('foods')) {
      return foodRecepieProgress();
    }
    drinkRecepieProgress();
  };

  return (
    <div>
      {recepieInProgress ? (
        <ButtonStyled
          type="button"
          data-testid="start-recipe-btn"
          onClick={ () => history.push(`${id}/in-progress`) }
        >
          Continue Recipe
        </ButtonStyled>)
        : (
          <ButtonStyled
            data-testid="start-recipe-btn"
            type="button"
            onClick={ handleClick }
          >
            Start Recipe
          </ButtonStyled>)}
    </div>
  );
}
