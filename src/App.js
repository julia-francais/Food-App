import React, { Component } from "react";
import "./App.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Recipe from "./pages/Recipe";

import RecipeProvider from "./providers/RecipeProvider";

class App extends Component {
  render() {
    return (
      <RecipeProvider>
        <Router>
          <div className="App">
            <Header />
            <Switch>
              <Route path="/recipe/:id" component={Recipe} />
              <Route path="/" component={Home} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </RecipeProvider>
    );
  }
}

export default App;
