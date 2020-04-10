import React from "react";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tooltip from "react-simple-tooltip";

import { Link } from "react-router-dom";

export const RecipeItem = (props) => {
  console.log(props);
  const recipeId = props.recipe.recipe.uri.slice(52, 84);

  return (
    <Link to={`/recipe/${recipeId}`}>
      <Card className="my-2 cardItem">
        <Card.Img variant="top" src={props.recipe.recipe.image} alt="Dish" />
        <Card.Body>
          <Card.Title>{props.recipe.recipe.label}</Card.Title>
          <Card.Text as="span">By: </Card.Text>

          <Card.Link href={props.recipe.recipe.url}>
            {props.recipe.recipe.source}
          </Card.Link>
        </Card.Body>
        <hr />
        <Container fluid className="pb-2 mt-2">
          <Row>
            <Col xs={6} className="cardFooterLeft">
              {props.recipe.recipe.calories / props.recipe.recipe.yield <
              600 ? (
                props.recipe.recipe.calories / props.recipe.recipe.yield <
                200 ? (
                  <p>N/A</p>
                ) : (
                  <Tooltip content="calories per serving">
                    <h5>
                      <Badge data-tip data-for="global" pill variant="success">
                        {Math.round(
                          props.recipe.recipe.calories /
                            props.recipe.recipe.yield
                        )}{" "}
                        cal
                      </Badge>
                    </h5>
                  </Tooltip>
                )
              ) : props.recipe.calories < 850 ? (
                <h5>
                  <Badge data-tip data-for="global" pill variant="warning">
                    {Math.round(
                      props.recipe.recipe.calories / props.recipe.recipe.yield
                    )}{" "}
                    cal
                  </Badge>
                </h5>
              ) : (
                <Tooltip>
                  <h5>
                    <Badge pill variant="danger">
                      {Math.round(
                        props.recipe.recipe.calories / props.recipe.recipe.yield
                      )}{" "}
                      cal
                    </Badge>
                  </h5>
                </Tooltip>
              )}
            </Col>
            <Col xs={6} className="cardFooterRight">
              <p>
                <strong>{props.recipe.recipe.ingredients.length}</strong>{" "}
                ingredients
              </p>
            </Col>
          </Row>
        </Container>
      </Card>
    </Link>
  );
};

export default RecipeItem;
