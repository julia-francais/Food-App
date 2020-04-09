import React from "react";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const RecipeItem = (props) => {
  console.log(props.recipe);
  const healthLabels = props.recipe.recipe.healthLabels;
  return (
    <Card className="my-2 cardItem">
      <Card.Img variant="top" src={props.recipe.recipe.image} alt="Dish" />
      <Card.Body>
        <Card.Title>{props.recipe.recipe.label}</Card.Title>
        <Card.Text>
          Source:{" "}
          <a href={props.recipe.recipe.url}>{props.recipe.recipe.source}</a>
        </Card.Text>
      </Card.Body>
      <Card.Footer className="cardFooter">
        <Container>
          <Row>
            {props.recipe.recipe.dietLabels.length
              ? props.recipe.recipe.dietLabels.map((label, index) => (
                  <Col sm={6}>
                    <h5 key={index}>
                      <Badge pill variant="success">
                        {label}{" "}
                        {index !== props.recipe.recipe.dietLabels.length - 1 &&
                          "| "}
                      </Badge>
                    </h5>
                  </Col>
                ))
              : null}

            {healthLabels.length &&
              healthLabels.map((label, index) => {
                return label === "Vegetarian" ? (
                  <Col sm={6}>
                    <h5 key={index}>
                      <Badge pill variant="info">
                        {label}
                      </Badge>
                    </h5>
                  </Col>
                ) : (
                  label === "Vegan" && (
                    <Col sm={6}>
                      <h5 key={index}>
                        <Badge pill variant="info">
                          {label}
                        </Badge>
                      </h5>
                    </Col>
                  )
                );
              })}
          </Row>
        </Container>
      </Card.Footer>
    </Card>
  );
};

export default RecipeItem;
