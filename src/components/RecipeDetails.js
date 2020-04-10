import React from "react";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Link } from "react-router-dom";

export const RecipeDetails = (props) => {
  const recipe = props.recipe[0].recipe;

  return (
    <Container>
      <Row>

    <Col sm="3" key={recipe.uri}>
      <img src={recipe.image} alt="Dish" width="100" />
      <p>{recipe.label}</p>
      <Col sm="3">
        <h2>Ingredients :</h2>
        <ul>
          {recipe.ingredientLines.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </Col>
      <Col sm="3">
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

      <div>
        <p>
          Diet Labels:{" "}
          {recipe.dietLabels.length ? (
            recipe.dietLabels.map((label, index) => (
              <h5 key={index}>
                <Badge variant="success" pill>
                  {label} {index !== recipe.dietLabels.length - 1 && "| "}
                </Badge>
              </h5>
            ))
          ) : (
            <span>No health label attributed yet.</span>
          )}
        </p>
        <p>
          Health Labels:{" "}
          {recipe.healthLabels.length ? (
            recipe.healthLabels.map((label, index) => (
              <h4 key={index}>
                <Badge pill variant="info">
                  {label} {index !== recipe.healthLabels.length - 1 && "| "}
                </Badge>
              </h4>
            ))
          ) : (
            <span>No health label attributed yet.</span>
          )}
        </p>
      </div>
      <Link to="/">Go back to other delicious recipes</Link>
    </Container>

  );
};

export default RecipeDetails;
