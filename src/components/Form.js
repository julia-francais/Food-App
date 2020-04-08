import React from "react";
import Form from "react-bootstrap/Form";

const SearchForm = (props) => {
  const handleClick = (e) => {
    const query = e.target.elements.recipeName.value;
    let diet;
    if (e.target.elements.diet.value) {
      diet = e.target.elements.diet.value;
    } else {
      diet = "vegetarian";
    }
    e.preventDefault();

    console.log("query", query);
    console.log("diet", diet);
    props.getRecipes(query, diet);
  };
  return (
    <Form onSubmit={handleClick}>
      <Form.Group sm="4" controlId="recipeName">
        <Form.Control type="text" placeholder="Recipe Search" />
        <br />
      </Form.Group>

      <Form.Group controlId="diet">
        <Form.Label>Diet type</Form.Label>
        <Form.Control as="select" sm="3">
          <option value="balanced">balanced</option>
          <option value="low-carb">low-carb</option>
          <option value="low-fat">low-fat</option>
          <option value="high-protein">high-protein</option>
          <option value="vegan">vegan</option>
          <option value="vegetarian">vegetarian</option>
          <option value="sugar-conscious">sugar-conscious</option>
          <option value="peanut-free">peanut-free</option>
          <option value="tree-nut-free">tree-nut-free</option>
          <option value="alcohol-free">alcohol-free</option>
        </Form.Control>
      </Form.Group>
      <button>Search</button>
    </Form>
  );
};

export default SearchForm;
