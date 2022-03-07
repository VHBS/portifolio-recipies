import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router';
import Login from './pages/Login';
import Provider from './context/RecepiesProvider';
import PrincipalFoodPage from './pages/PrincipalFoodPage';
import PrincipalDrinkPage from './pages/PrincipalDrinkPage';
import DetailsRecipeFood from './pages/DetailsRecipeFood';
import DetailsRecipeDrink from './pages/DetailsRecipeDrink';
import FoodInProgress from './pages/FoodInProgress';
import DrinkInProgress from './pages/DrinkInProgress';
import ExplorerPage from './pages/ExplorerPage';
import ExplorerFood from './pages/ExplorerFood';
import ExplorerDrink from './pages/ExplorerDrink';
import ExploreByIngredientFood from './pages/ExploreByIngredientFood';
import ExploreByIngredientDrink from './pages/ExploreByIngredientDrink';
import ExploreFoodByLocal from './pages/ExploreFoodByLocal';
import ProfilePage from './pages/ProfilePage';
import DoneRecipes from './pages/DoneRecipes';
import FavoriteRecipes from './pages/FavoriteRecipes';

function App() {
  return (
    <Provider>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/foods" component={ PrincipalFoodPage } />
        <Route exact path="/drinks" component={ PrincipalDrinkPage } />
        <Route exact path="/foods/:id" component={ DetailsRecipeFood } />
        <Route exact path="/drinks/:id" component={ DetailsRecipeDrink } />
        <Route path="/foods/:id/in-progress" component={ FoodInProgress } />
        <Route path="/drinks/:id/in-progress" component={ DrinkInProgress } />
        <Route exact path="/explore" component={ ExplorerPage } />
        <Route exact path="/explore/foods" component={ ExplorerFood } />
        <Route exact path="/explore/drinks" component={ ExplorerDrink } />
        <Route path="/explore/foods/ingredients" component={ ExploreByIngredientFood } />
        <Route
          path="/explore/drinks/ingredients"
          component={ ExploreByIngredientDrink }
        />
        <Route path="/explore/foods/nationalities" component={ ExploreFoodByLocal } />
        <Route path="/profile" component={ ProfilePage } />
        <Route path="/done-recipes" component={ DoneRecipes } />
        <Route path="/favorite-recipes" component={ FavoriteRecipes } />
      </Switch>
    </Provider>
  );
}

export default App;
