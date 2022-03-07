import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import BackButton from '../components/BackButton';
import FooterMenu from '../components/FooterMenu';
import Header from '../components/Header';
import RecepiesContext from '../context/RecepiesContext';

const ALL_INGREDIENTS_API = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
const MAGIC_NUMBER = 12;

const ButtonIngredient = styled.button`
  width: 35vw;
  margin-block: 1em;
  backdrop-filter: blur(15px);
  background-color: rgba(255, 255, 255, 0.4);
  padding: 1em;
  border-radius: 0.5em;
  box-shadow: 1px 5px 5px 0.5px rgba(0, 0, 0, 0.234);

  h2 {
    text-shadow: 0.05em 0.05em 1px rgba(0, 0, 0, 0.5);
    margin-bottom: 0.5em;
  }
`;

const ContainerIngredients = styled.div`
  margin-top: 1em;;
  margin-bottom: 4em;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export default function ExploreByIngredientFood() {
  const { mealIngredients, setMealIngredients } = useContext(RecepiesContext);
  const history = useHistory();

  const imgSrc = (i) => `https://www.themealdb.com/images/ingredients/${i}-Small.png`;

  useEffect(() => {
    const fetchIngredients = () => fetch(ALL_INGREDIENTS_API)
      .then((res) => res.json())
      .then((data) => {
        const slice = data.meals.slice(0, MAGIC_NUMBER);
        setMealIngredients(slice);
      });

    fetchIngredients();
  }, [setMealIngredients]);

  const handleRedirect = (value) => {
    history.push({
      pathname: '/foods',
      state: value,
    });
  };

  return (
    <div>
      <Header title="Explore Ingredients" />
      <BackButton />
      <ContainerIngredients>
        { mealIngredients && mealIngredients.length > 0
          ? mealIngredients.map((e, i) => (
            <ButtonIngredient
              type="button"
              data-testid={ `${i}-ingredient-card` }
              key={ e.idIngredient }
              // F para identificação como FOOD no history.push()
              onClick={ () => handleRedirect(`F${e.strIngredient}`) }
            >
              <h2
                data-testid={ `${i}-card-name` }
              >
                { e.strIngredient }
              </h2>
              <img
                src={ imgSrc(e.strIngredient) }
                alt="meal ingredient"
                data-testid={ `${i}-card-img` }
                width="100vw"
              />
            </ButtonIngredient>
          )) : null }
      </ContainerIngredients>
      <FooterMenu />
    </div>);
}
