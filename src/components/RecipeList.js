import React from "react";
import RecipeItem from "./RecipeItem";

export const RecipeList = (props) => {
  return (
    <div className="container">
      {props.recipes.map((recipe) => (
        <RecipeItem key={recipe.recipe.uri} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeList;
