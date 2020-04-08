import React, { Component } from "react";

export const RecipeContext = React.createContext();

const appId = process.env.REACT_APP_APP_ID;
const appKey = process.env.REACT_APP_API_KEY;

class RecipeProvider extends Component {
  state = {
    recipes: [],
    query: "",
    diet: "vegetarian",
    isLoading: false,
    error: null,
    getRecipes: (query, diet) => this.getRecipes(query, diet),
  };

  getRecipes = async (query, diet) => {
    console.log("qury", query, diet);
    this.setState((prevState) => ({
      ...prevState,
      isLoading: true,
    }));
    console.log(
      `https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}&from=0&to=10&diet=${diet}`
    );

    const api_call = await fetch(
      `https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}&from=0&to=10&diet=${diet}`
    );
    const data = await api_call.json();
    this.setState((prevState) => ({
      ...prevState,
      recipes: data.hits,
      isLoading: false,
    }));
  };

  //   fetch("./mockData/data.json")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       this.setState((prevState) => ({
  //         ...prevState,
  //         recipes: data.hits,
  //         isLoading: false,
  //       }));
  //       localStorage.setItem("recipes", JSON.stringify(data.hits));
  //     })
  //     .catch((err) => {
  //       this.setState((prevState) => ({
  //         ...prevState,
  //         error: err,
  //         isLoading: false,
  //       }));
  //       console.log("Error Reading data " + err);
  //     });
  // };

  render() {
    return (
      <RecipeContext.Provider value={this.state}>
        {this.props.children}
      </RecipeContext.Provider>
    );
  }
}

export default RecipeProvider;
