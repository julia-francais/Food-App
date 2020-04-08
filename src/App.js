import React, { Component } from "react";
import "./App.css";
import FormSearch from "./components/Form";
import RecipeList from "./components/RecipeList";

const appId = process.env.REACT_APP_APP_ID;
const appKey = process.env.REACT_APP_API_KEY;

class App extends Component {
  state = {
    recipes: [],
  };
  getRecipe = async (e) => {
    const query = e.target.elements.recipeName.value;
    let diet = e.target.elements.diet.value;
    diet = diet || "vegetarian";
    console.log("query", query);
    console.log("diet", diet);
    e.preventDefault();
    const api_call = await fetch(
      `https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}&from=0&to=10&diet=${diet}`
    );
    // const api_call = await fetch(`./mockData/data.json`);
    const data = await api_call.json();
    this.setState({ recipes: data.hits });
    console.log(this.state.recipes);
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <div className="container">
          <FormSearch getRecipe={this.getRecipe} />
          {this.state.recipes.length > 0 && (
            <RecipeList recipes={this.state.recipes} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
