import React, { useContext } from "react";

import RecipeDetails from "../components/RecipeDetails";

import { RecipeContext } from "../providers/RecipeProvider";

import { useParams } from "react-router";

//Bootstrap
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Recipe = () => {
  const context = useContext(RecipeContext);

  const recipes = context.recipes.length
    ? context.recipes
    : JSON.parse(localStorage.getItem("recipes"));

  const recipeId = useParams().id;
  console.log("recipeid", typeof recipeId);

  const searchedRecipe = recipes.filter(
    (recipe) => recipe.recipe.uri.slice(52, 84) === recipeId
  );

  return <RecipeDetails recipe={searchedRecipe}></RecipeDetails>;
};

export default Recipe;
