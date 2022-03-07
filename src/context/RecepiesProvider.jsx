import PropTypes from 'prop-types';
import React, { useState } from 'react';
import RecepiesContext from './RecepiesContext';

export default function Provider({ children }) {
  const [resultAPI, setResultAPI] = useState([]);
  const [fiveFilter, setFiveFilter] = useState([]);
  const [detailProduct, setDetailProduct] = useState({});
  const [mealIngredients, setMealIngredients] = useState([]);
  const [drinkIngredients, setDrinkIngredients] = useState([]);
  const [fromExploreRecipes, setFromExploreRecipes] = useState([]);

  const context = {
    resultAPI,
    setResultAPI,
    fiveFilter,
    setFiveFilter,
    mealIngredients,
    setMealIngredients,
    drinkIngredients,
    setDrinkIngredients,
    fromExploreRecipes,
    setFromExploreRecipes,
    detailProduct,
    setDetailProduct,

  };
  return (
    <RecepiesContext.Provider value={ context }>
      {children}
    </RecepiesContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node,
}.isRequired;
