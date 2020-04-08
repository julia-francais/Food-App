import React from "react";

export const RecipeItem = (props) => {
  console.log(props.recipe);
  return (
    <div key={props.recipe.recipe.uri}>
      <img src={props.recipe.recipe.image} alt="Dish" width="100" />
      <p>{props.recipe.recipe.label}</p>
      <p>
        Source:{" "}
        <a href={props.recipe.recipe.url}>{props.recipe.recipe.source}</a>
      </p>
      <p>
        Diet:{" "}
        {props.recipe.recipe.dietLabels.length ? (
          props.recipe.recipe.dietLabels.map((label, index) => (
            <span key={index}>
              {label}{" "}
              {index !== props.recipe.recipe.dietLabels.length - 1 && "| "}
            </span>
          ))
        ) : (
          <span>No health label attributed yet.</span>
        )}
      </p>
      <p>
        Health Labels:{" "}
        {props.recipe.recipe.healthLabels.length ? (
          props.recipe.recipe.healthLabels.map((label, index) => (
            <span key={index}>
              {label}{" "}
              {index !== props.recipe.recipe.healthLabels.length - 1 && "| "}
            </span>
          ))
        ) : (
          <span>No health label attributed yet.</span>
        )}
      </p>
    </div>
  );
};

export default RecipeItem;
