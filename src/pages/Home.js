import React, { useContext } from "react";

import SearchForm from "../components/Form";
import RecipeList from "../components/RecipeList";

import { RecipeContext } from "../providers/RecipeProvider";

//Bootstrap
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = () => {
  const context = useContext(RecipeContext);
  const { recipes, getRecipes, handleClick } = context;

  return (
    <div>
      <Jumbotron fluid>
        <Container className="jumbotronContainer">
          <h1>Search over 300 recipes:</h1>
          {!recipes.length && (
            <Container>
              <Row className="justify-content-md-center">
                <Col xs="4" lg="6">
                  <SearchForm
                    getRecipes={getRecipes}
                    handleClick={handleClick}
                  />
                </Col>
              </Row>
            </Container>
          )}
        </Container>
      </Jumbotron>

      <Container fluid>
        <RecipeList recipes={recipes} />
      </Container>
    </div>
  );
};

export default Home;
