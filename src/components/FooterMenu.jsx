import React from 'react';
import { useHistory } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

export default function FooterMenu() {
  const history = useHistory();

  const redirectToDrinks = () => {
    history.push('/drinks');
  };

  const redirectToExplore = () => {
    history.push('/explore');
  };

  const redirectToFoods = () => {
    history.push('/foods');
  };
  return (
    <footer id="footer" data-testid="footer">
      <button
        className="footer-button"
        type="button"
        data-testid="drinks-bottom-btn"
        src={ drinkIcon }
        onClick={ redirectToDrinks }
      >
        <img src={ drinkIcon } alt="icone para bebidas" />
      </button>
      <button
        className="footer-button"
        type="button"
        data-testid="explore-bottom-btn"
        src={ exploreIcon }
        onClick={ redirectToExplore }
      >
        <img src={ exploreIcon } alt="icone para exploracao" />
      </button>
      <button
        className="footer-button"
        type="button"
        data-testid="food-bottom-btn"
        src={ mealIcon }
        onClick={ redirectToFoods }
      >
        <img src={ mealIcon } alt="icone para comidas" />
      </button>
    </footer>
  );
}
