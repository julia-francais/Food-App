import React from "react";

import DietGraph from "./DietGraph";
import NutritionTable from "./NutritionTable";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Link } from "react-router-dom";

export const RecipeDetails = (props) => {
  const recipe = props.recipe[0].recipe;
  const digest = recipe.digest.slice(0, 3);

  return (
    <Container className="mt-4">
      <Link to="/">
        <Button className="linkButton">
          Go back to other delicious recipes
        </Button>
      </Link>
      <h1 className="display-3 my-4">{recipe.label}</h1>

      <Row className="my-4">
        <Col sm="4" key={recipe.uri}>
          <img src={recipe.image} alt="Dish" className="recipeDetailsImage" />
          <Row className="py-2">
            <Col sm="6">{Math.round(recipe.calories)} calories</Col>
            <Col sm="6">{recipe.yield} servings</Col>
          </Row>
        </Col>
        <Col sm="4" className="contentCol">
          <h2>Ingredients :</h2>
          <ul className="p-4">
            {recipe.ingredientLines.map((ingredient, index) => (
              <li key={index} className="py-1">
                {ingredient}
              </li>
            ))}
          </ul>
          {recipe.dietLabels.length
            ? recipe.dietLabels.map((label, index) => (
                <h5 key={index} className="nutritionBadge">
                  <Badge pill variant="info">
                    {label} {index !== recipe.dietLabels.length - 1 && "| "}
                  </Badge>
                </h5>
              ))
            : null}
          {recipe.healthLabels.length
            ? recipe.healthLabels.map((label, index) => (
                <h5 key={index} className="nutritionBadge">
                  <Badge pill variant="success">
                    {label}
                  </Badge>
                </h5>
              ))
            : null}
        </Col>
        <Col sm="4" className="contentCol">
          <h2>Preparations</h2>
          <p>
            Recipe provided by : <a href={recipe.url}>{recipe.source}</a>
          </p>
          <p>
            View the detailed preparation instructions by clicking the following
            link :
          </p>
          <a href={recipe.url} target="_blank" rel="noopener noreferrer">
            <Button color="info">View the preparation</Button>
          </a>
        </Col>
      </Row>
      <h2>Diet :</h2>

      <Row className="mt-4">
        <Col sm="6">
          <NutritionTable recipe={recipe} className="table" />
        </Col>
        <Col sm="6">
          <DietGraph digest={digest} />
        </Col>
      </Row>
    </Container>
  );
};

export default RecipeDetails;
