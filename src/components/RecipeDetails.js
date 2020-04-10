import React from "react";

import DietGraph from "./DietGraph";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Link } from "react-router-dom";

export const RecipeDetails = (props) => {
  const recipe = props.recipe[0].recipe;

  return (
    <Container className="mt-4">
      <h1 className="display-3 my-4">{recipe.label}</h1>
      <Row>
        <Col sm="4" key={recipe.uri}>
          <img src={recipe.image} alt="Dish" className="recipeDetailsImage" />
          <Row>
            <Col sm="6">{Math.round(recipe.calories)} calories</Col>
            <Col sm="6">{recipe.yield} servings</Col>
          </Row>
        </Col>
        <Col sm="4">
          <h2>Ingredients :</h2>
          <ul>
            {recipe.ingredientLines.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </Col>
        <Col sm="4">
          <h2>Preparations</h2>
          <p>
            Recipe provided by : <a href={recipe.url}>{recipe.source}</a>
          </p>
          <p>
            View the detailed preparation instructions by clicking the following
            link :
          </p>
          <a href={recipe.url} target="_blank">
            <Button color="info">View the preparation</Button>
          </a>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col sm="6">
          <Row>
            <Col sm="4">Diet Labels:</Col>
            <Col sm="8">
              {recipe.dietLabels.length ? (
                recipe.dietLabels.map((label, index) => (
                  <h5 key={index}>
                    <Badge pill variant="info">
                      {label} {index !== recipe.dietLabels.length - 1 && "| "}
                    </Badge>
                  </h5>
                ))
              ) : (
                <span>No health label attributed yet.</span>
              )}
              <DietGraph digest={recipe.digest} />
            </Col>
          </Row>
        </Col>
        <Col sm="6">
          <Row>
            <Col sm="4">Health Labels:</Col>
            <Col sm="8">
              {recipe.healthLabels.length ? (
                recipe.healthLabels.map((label, index) => (
                  <h4 key={index}>
                    <Badge pill variant="success">
                      {label}
                    </Badge>
                  </h4>
                ))
              ) : (
                <span>No health label attributed yet.</span>
              )}
            </Col>
          </Row>
        </Col>
      </Row>
      <Link to="/">
        <Button className="linkButton">
          Go back to other delicious recipes
        </Button>
      </Link>
    </Container>
  );
};

export default RecipeDetails;
