import React from "react";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

export const RecipeItem = (props) => {
  console.log(props.recipe);
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
      <Card.Footer>
        {props.recipe.recipe.dietLabels.length
          ? props.recipe.recipe.dietLabels.map((label, index) => (
              <h4 key={index}>
                <Badge pill variant="success">
                  {label}{" "}
                  {index !== props.recipe.recipe.dietLabels.length - 1 && "| "}
                </Badge>
              </h4>
            ))
          : null}
      </Card.Footer>
    </Card>

    //   <p>
    //     Diet:{" "}
    //     {props.recipe.recipe.dietLabels.length ? (
    //       props.recipe.recipe.dietLabels.map((label, index) => (
    //         <span key={index}>
    //           {label}{" "}
    //           {index !== props.recipe.recipe.dietLabels.length - 1 && "| "}
    //         </span>
    //       ))
    //     ) : (
    //       <span>No health label attributed yet.</span>
    //     )}
    //   </p>
    //   <p>
    //     Health Labels:{" "}
    //     {props.recipe.recipe.healthLabels.length ? (
    //       props.recipe.recipe.healthLabels.map((label, index) => (
    //         <span key={index}>
    //           {label}{" "}
    //           {index !== props.recipe.recipe.healthLabels.length - 1 && "| "}
    //         </span>
    //       ))
    //     ) : (
    //       <span>No health label attributed yet.</span>
    //     )}
    //   </p>
  );
};

export default RecipeItem;
