import React from "react";
import RecipeItem from "./RecipeItem";

//Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const RecipeList = (props) => {
  return (
    <Container>
      <Row>
        {props.recipes.map((recipe) => (
          <Col key={recipe.recipe.uri} sm="3">
            <RecipeItem recipe={recipe} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default RecipeList;
