import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import BackButton from '../components/BackButton';
import FooterMenu from '../components/FooterMenu';
import Header from '../components/Header';
import RecepiesContext from '../context/RecepiesContext';

const ALL_INGREDIENTS_API = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';
const MAGIC_NUMBER = 12;

const ButtonIngredient = styled.button`
  width: 35vw;
  margin-block: 1em;
  backdrop-filter: blur(15px);
  background-color: rgba(255, 255, 255, 0.4);
  padding: 1em;
  border-radius: 1em;
  box-shadow: 1px 5px 5px 0.5px rgba(0, 0, 0, 0.234);

  h2 {
    text-shadow: 0.05em 0.05em 1px rgba(0, 0, 0, 0.5);
  }
`;

const ContainerIngredients = styled.div`
  margin-top: 1em;;
  margin-bottom: 4em;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export default function ExploreByIngredientDrink() {
  const { drinkIngredients, setDrinkIngredients } = useContext(RecepiesContext);
  const history = useHistory();

  const imgSrc = (i) => `https://www.thecocktaildb.com/images/ingredients/${i}-Small.png`;

  useEffect(() => {
    const fetchIngredients = () => fetch(ALL_INGREDIENTS_API)
      .then((res) => res.json())
      .then((data) => {
        const slice = data.drinks.slice(0, MAGIC_NUMBER);
        setDrinkIngredients(slice);
      });

    fetchIngredients();
  }, [setDrinkIngredients]);

  const handleRedirect = (value) => {
    history.push({
      pathname: '/drinks',
      state: value,
    });
  };

  return (
    <div>
      <Header title="Explore Ingredients" />
      <BackButton />
      <ContainerIngredients>
        { drinkIngredients && drinkIngredients.length > 0
          ? drinkIngredients.map((e, i) => (
            <ButtonIngredient
              type="button"
              key={ e.strIngredient1 }
              data-testid={ `${i}-ingredient-card` }
              onClick={ () => handleRedirect(`D${e.strIngredient1}`) }
            >
              <h2 data-testid={ `${i}-card-name` }>{ e.strIngredient1 }</h2>
              <img
                src={ imgSrc(e.strIngredient1) }
                alt="drink ingredient"
                data-testid={ `${i}-card-img` }
              />
            </ButtonIngredient>
          )) : null}
      </ContainerIngredients>
      <FooterMenu />
    </div>);
}
