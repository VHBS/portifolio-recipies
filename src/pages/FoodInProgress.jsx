import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import FavoriteButtonDetails from '../components/FavoriteButtonDetails';
import InputsRecipesProgressFood from '../components/InputsRecipesProgressFood';
import ShareButton from '../components/ShareButton';
import RecepiesContext from '../context/RecepiesContext';
import { ImageDetailsStyled,
  ContentContainerStyled, TitleDetailsStyled,
  ButtonStyled } from '../styles/DetailsRecipeFoodStyled';

const DETAILS_FOOD_API = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
const INGREDIENT_QUANTITY = 20;

export default function FoodInProgress() {
  const { detailProduct, setDetailProduct } = useContext(RecepiesContext);
  const [ingredients, setIngredients] = useState([]);
  const [doneRecipe, setDoneRecipe] = useState(true);
  const history = useHistory();
  const { id } = useParams();
  let product;

  useEffect(() => {
    const requisitionById = (url, value) => {
      fetch(`${url}${value}`)
        .then((response) => response.json())
        .then((data) => {
          setDetailProduct(data);
          const ingredientsArr = [];
          for (let i = 1; i < INGREDIENT_QUANTITY; i += 1) {
            const igred = data.meals[0][`strIngredient${i}`];
            const quantity = data.meals[0][`strMeasure${i}`];
            if (igred !== '' && igred !== null && igred !== undefined) {
              ingredientsArr.push(`${igred} - ${quantity}`);
            }
          }
          setIngredients(ingredientsArr);
        })
        .catch(() => []);
    };

    requisitionById(DETAILS_FOOD_API, id);
  }, [id, setDetailProduct]);

  if (detailProduct.meals) {
    const [firstItem] = detailProduct.meals;
    product = firstItem;
  }

  const finishRecipeClick = () => {
    const data = new Date();
    const dia = data.getDate();
    const mes = data.getMonth();
    const ano = data.getFullYear();

    let doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
    if (!doneRecipes) {
      doneRecipes = [{
        id: product.idMeal,
        type: 'food',
        nationality: product.strArea,
        category: product.strCategory,
        alcoholicOrNot: '',
        name: product.strMeal,
        image: product.strMealThumb,
        doneDate: `${dia}/${mes}/${ano}`,
        tags: [product.strTags],
      }];
    } else {
      doneRecipes = [...doneRecipes, {
        id: product.idMeal,
        type: 'food',
        nationality: product.strArea,
        category: product.strCategory,
        alcoholicOrNot: '',
        name: product.strMeal,
        image: product.strMealThumb,
        doneDate: `${dia}/${mes}/${ano}`,
        tags: [product.strTags],
      }];
    }
    localStorage.setItem('doneRecipes', JSON.stringify(doneRecipes));
    history.push('/done-recipes');
  };

  return (
    <div>
      <BackButton />
      {product && (
        <ContentContainerStyled>
          <ImageDetailsStyled
            data-testid="recipe-photo"
            src={ product.strMealThumb }
            alt={ product.strMeal }
          />
          <TitleDetailsStyled
            data-testid="recipe-title"
          >
            {product.strMeal}
          </TitleDetailsStyled>
          <ShareButton />
          <FavoriteButtonDetails />
          <h3>Category</h3>
          <p data-testid="recipe-category">{product.strCategory}</p>
          <h3>Instructions</h3>
          <p data-testid="instructions">{product.strInstructions}</p>
          <h3>Progress Recipe</h3>
          <InputsRecipesProgressFood
            ingredients={ ingredients }
            setDoneRecipe={ setDoneRecipe }
          />
          <ButtonStyled
            data-testid="finish-recipe-btn"
            type="button"
            disabled={ doneRecipe }
            onClick={ finishRecipeClick }
          >
            Finish Recipe
          </ButtonStyled>
        </ContentContainerStyled>
      )}
    </div>
  );
}
