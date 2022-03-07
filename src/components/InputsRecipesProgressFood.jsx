import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function InputsRecipesProgressFood({ ingredients, setDoneRecipe }) {
  const [checkProgress, setCheckProgress] = useState([]);
  const { id } = useParams();

  const updateLocalStorage = ({ target }) => {
    const recepiesInProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (recepiesInProgress.meals[id].includes(target.value)) {
      recepiesInProgress.meals[id] = recepiesInProgress.meals[id]
        .filter((item) => item !== target.value);
    } else {
      recepiesInProgress.meals[id] = [...recepiesInProgress.meals[id], target.value];
    }
    localStorage.setItem('inProgressRecipes', JSON.stringify(recepiesInProgress));
    if (recepiesInProgress.meals[id].length === ingredients.length) {
      return setDoneRecipe(false);
    }
    setDoneRecipe(true);
  };

  useEffect(() => {
    const recepiesInProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (!recepiesInProgress) {
      return localStorage.setItem('inProgressRecipes', JSON
        .stringify({ cocktails: {}, meals: { [id]: [] } }));
    }
    setCheckProgress(recepiesInProgress.meals[id]);
  }, [id, setCheckProgress]);

  return (
    <div className="pgrogress-inputs">
      { ingredients.map((item, index) => (
        <label
          htmlFor={ `${index} item` }
          data-testid={ `${index}-ingredient-step` }
          key={ item + index }
        >
          {checkProgress.includes(item)
            ? (
              <input
                id={ `${index} item` }
                type="checkbox"
                onClick={ (e) => updateLocalStorage(e) }
                value={ item }
                defaultChecked
              />)
            : (
              <input
                id={ `${index} item` }
                type="checkbox"
                onClick={ (e) => updateLocalStorage(e) }
                value={ item }
              />)}
          {item}
        </label>
      ))}
    </div>);
}

InputsRecipesProgressFood.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.string),
}.isRequired;
