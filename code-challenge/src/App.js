import React, { Component } from "react";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home.js";
import About from "./Components/About.js";
import Question from "./Components/Question.js";
import Edit from "./Components/Edit.js"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav>
            <Link to="/home">
              <h1 className="link home">[ Home ]</h1>
            </Link>
            <h1 className="logo">GA-Code-Challenge</h1>
            <Link to="/about">
              <h1 className="link about">[ About ]</h1>
            </Link>
          </nav>
        </header>
        <main>
          <div>
            <Switch>
              <Route exact path="/home" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/Edit" component={Edit} />
              <Route
                exact
                path="/:question"
                render={route => (
                  <Question {...route} items={this.state.items} />
                )}
              />
              <Route path="/*" render={() => <Redirect to="/home" />} />
            </Switch>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
