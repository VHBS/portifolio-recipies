import PropTypes from 'prop-types';
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import RecepiesContext from '../context/RecepiesContext';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import { HeaderStyled, TitleHeaderStyled, LabelStyled,
  ProfileButtonStyled, SearchShowStyled,
  SearchButtonStyled, SearchInputsContainerStyled, SearchInputStyled,
  RadioInputsContainerStyled, InputRadioStyled, SearchButtonFilterStyled,
} from '../styles/HeaderStyled';

const FOOD_INGREDIENT_API = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=';
const FOOD_NAME_API = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const FOOD_FIRST_LETTER_API = 'https://www.themealdb.com/api/json/v1/1/search.php?f=';

const DRINK_INGREDIENT_API = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=';
const DRINK_NAME_API = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const DRINK_FIRST_LETTER_API = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=';

export default function Header(props) {
  const { setResultAPI } = useContext(RecepiesContext);
  const [showInput, setShowInput] = useState(false);
  const [inputRadioVal, setInputRadio] = useState('');
  const [inputTextVal, setInputText] = useState('');

  const { title, search } = props;
  const history = useHistory();

  const handleClick = () => {
    history.push('/profile');
  };

  const requisitionAPI = (url) => {
    fetch(`${url}${inputTextVal}`)
      .then((response) => response.json())
      .then((data) => {
        if (history.location.pathname === '/foods') {
          if (data.meals === null) {
            return global
              .alert('Sorry, we haven\'t found any recipes for these filters.');
          } if (data.meals.length === 1) {
            return history.push(`/foods/${data.meals[0].idMeal}`);
          }
          return setResultAPI(data);
        }
        if (data.drinks === null) {
          return global
            .alert('Sorry, we haven\'t found any recipes for these filters.');
        }
        if (data.drinks.length === 1) {
          return history.push(`/drinks/${data.drinks[0].idDrink}`);
        }
        return setResultAPI(data);
      });
  };

  const searchFoods = () => {
    if (inputRadioVal === 'ingredient') {
      requisitionAPI(FOOD_INGREDIENT_API);
    }
    if (inputRadioVal === 'name') {
      requisitionAPI(FOOD_NAME_API);
    }
    if (inputRadioVal === 'first-letter') {
      if (inputTextVal.length > 1) {
        return global.alert('Your search must have only 1 (one) character');
      }
      requisitionAPI(FOOD_FIRST_LETTER_API);
    }
  };

  const searchDrinks = () => {
    if (inputRadioVal === 'ingredient') {
      requisitionAPI(DRINK_INGREDIENT_API);
    }
    if (inputRadioVal === 'name') {
      requisitionAPI(DRINK_NAME_API);
    }
    if (inputRadioVal === 'first-letter') {
      if (inputTextVal.length > 1) {
        return global.alert('Your search must have only 1 (one) character');
      }
      requisitionAPI(DRINK_FIRST_LETTER_API);
    }
  };

  const handleCancel = () => {
    setShowInput(false);
    setInputText('');
  };

  const handleSearch = () => {
    if (history.location.pathname === '/foods') {
      setShowInput(false);
      setInputText('');
      return searchFoods();
    }
    setShowInput(false);
    setInputText('');
    return searchDrinks();
  };

  return (
    <HeaderStyled>
      <TitleHeaderStyled
        data-testid="page-title"
      >
        {title}
      </TitleHeaderStyled>
      <ProfileButtonStyled
        type="button"
        data-testid="profile-top-btn"
        src={ profileIcon }
        onClick={ handleClick }
      >
        <img src={ profileIcon } alt="icone para perfil" />
      </ProfileButtonStyled>
      {search && (
        <SearchShowStyled>
          <SearchButtonStyled
            type="button"
            data-testid="search-top-btn"
            src={ searchIcon }
            onClick={ () => setShowInput(!showInput) }
          >
            <img
              // style={ { filter: '#fffffe',
              // } }
              color="#fffffe"
              src={ searchIcon }
              alt="icone para pesquisar"
            />
          </SearchButtonStyled>
          { showInput && (
            <SearchInputsContainerStyled>
              <SearchInputStyled
                placeholder="Filtrar"
                onChange={ ({ target: { value } }) => setInputText(value) }
                defaultValue={ inputTextVal }
                data-testid="search-input"
                type="text"
              />
              <RadioInputsContainerStyled>
                <LabelStyled htmlFor="search-ingredient">
                  <InputRadioStyled
                    data-testid="ingredient-search-radio"
                    type="radio"
                    name="search"
                    id="search-ingredient"
                    value="ingredient"
                    onClick={ ({ target: { value } }) => setInputRadio(value) }
                  />
                  Ingredient
                </LabelStyled>
                <LabelStyled htmlFor="search-name">
                  <InputRadioStyled
                    id="search-name"
                    data-testid="name-search-radio"
                    type="radio"
                    name="search"
                    value="name"
                    onClick={ ({ target: { value } }) => setInputRadio(value) }
                  />
                  Name
                </LabelStyled>
                <LabelStyled htmlFor="search-first-letter">
                  <InputRadioStyled
                    id="search-first-letter"
                    data-testid="first-letter-search-radio"
                    type="radio"
                    name="search"
                    value="first-letter"
                    onClick={ ({ target: { value } }) => setInputRadio(value) }
                  />
                  First letter
                </LabelStyled>
              </RadioInputsContainerStyled>
              <SearchButtonFilterStyled
                data-testid="exec-search-btn"
                type="button"
                onClick={ handleSearch }
              >
                Search
              </SearchButtonFilterStyled>
              <SearchButtonFilterStyled
                type="button"
                onClick={ handleCancel }
              >
                Cancel
              </SearchButtonFilterStyled>
            </SearchInputsContainerStyled>
          )}
        </SearchShowStyled>
      )}
    </HeaderStyled>
  );
}

Header.propTypes = {
  title: PropTypes.string,
}.isRequired;
