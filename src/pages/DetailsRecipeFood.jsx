import { cleanup } from '@testing-library/react';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BsArrowRightShort, BsArrowLeftShort } from 'react-icons/bs';
import BackButton from '../components/BackButton';
import FavoriteButtonDetails from '../components/FavoriteButtonDetails';
import ShareButton from '../components/ShareButton';
import StartButton from '../components/StartButton';
import RecepiesContext from '../context/RecepiesContext';
import { ImageDetailsStyled,
  TitleDetailsStyled,
  ContentContainerStyled,
  VideoStyled,
  TitleRecomendationStyled,
  ArrowsStyled,
} from '../styles/DetailsRecipeFoodStyled';

const DETAILS_FOOD_API = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
const INGREDIENT_QUANTITY = 20;
const RECOMENDATION = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const RECOMENDATION_SIZE = 6;

export default function DetailsRecipeFood() {
  const { detailProduct, setDetailProduct } = useContext(RecepiesContext);
  const [ingredients, setIngredients] = useState([]);
  const [recomendation, setRecomendation] = useState([]);
  const { id } = useParams();
  let product;

  const ingredientsFunc = (ingredient) => {
    const ingredientsArr = [];
    for (let i = 1; i < INGREDIENT_QUANTITY; i += 1) {
      const igred = ingredient[`strIngredient${i}`];
      const quantity = ingredient[`strMeasure${i}`];
      if (igred !== '' && igred !== null && igred !== undefined
      && quantity !== '' && quantity !== null && quantity !== undefined) {
        ingredientsArr.push(`${igred} - ${quantity}`);
      } else if (igred !== '' && igred !== null && igred !== undefined) {
        ingredientsArr.push(`${igred}`);
      }
    }
    setIngredients(ingredientsArr);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const requisitionById = (url, value) => {
      fetch(`${url}${value}`)
        .then((response) => response.json())
        .then((data) => {
          setDetailProduct(data);
          ingredientsFunc(data.meals[0]);
        })
        .catch(() => []);
    };

    requisitionById(DETAILS_FOOD_API, id);
    const recomendationFetch = () => {
      fetch(RECOMENDATION)
        .then((response) => response.json())
        .then((data) => {
          setRecomendation(data.drinks.slice(0, RECOMENDATION_SIZE));
        });
    };
    recomendationFetch();
    return (
      cleanup()
    );
  }, [id, setDetailProduct, setRecomendation]);

  if (detailProduct.meals) {
    const { meals: [firstItem] } = detailProduct;
    product = firstItem;
  }

  return (
    <div>
      <BackButton />
      { detailProduct.meals && (
        <ContentContainerStyled>
          <ImageDetailsStyled
            data-testid="recipe-photo"
            src={ product.strMealThumb }
            alt={ product.strMeal }
          />
          <TitleDetailsStyled data-testid="recipe-title">
            {product.strMeal}
          </TitleDetailsStyled>
          <ShareButton />
          <h3>
            Ingredients
          </h3>
          { ingredients.map((item, index) => (
            <p
              data-testid={ `${index}-ingredient-name-and-measure` }
              key={ item + index }
            >
              {item}
            </p>
          )) }
          <FavoriteButtonDetails />
          <h3>Category</h3>
          <p data-testid="recipe-category">{product.strCategory}</p>
          <h3>Instructions</h3>
          <p
            className="instructions"
            data-testid="instructions"
          >
            {product.strInstructions}
          </p>
          <VideoStyled
            src={ product.strYoutube
              .replace('youtube.com/watch?v=', 'youtube-nocookie.com/embed/') }
            frameBorder="0"
            allowFullScreen
            title="video"
            data-testid="video"
          />
          <StartButton ingredients={ ingredients } />
          <ArrowsStyled>
            <p className="left">
              <BsArrowLeftShort />
            </p>
            <h3>Recomendations</h3>
            <p className="rigth">
              <BsArrowRightShort />
            </p>
          </ArrowsStyled>
          <div className="recomendation-container">
            {recomendation && recomendation.map((item, index) => (
              <div
                className="recomendation-img"
                data-testid={ `${index}-recomendation-card` }
                key={ item.idDrink }
              >
                <TitleRecomendationStyled
                  data-testid={ `${index}-recomendation-title` }
                >
                  {item.strDrink}
                </TitleRecomendationStyled>
                <ImageDetailsStyled src={ item.strDrinkThumb } alt={ item.strDrink } />
              </div>
            ))}
          </div>
        </ContentContainerStyled>
      )}
    </div>
  );
}
