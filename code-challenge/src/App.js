import React, { Component } from "react";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home.js";
import About from "./Components/About.js";
import Question from "./Components/Question.js";
import questionJson from "./Components/Question.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: questionJson
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
              <Route path="/home" exact component={Home} />
              <Route path="/about" exact component={About} />
              <Route
                path="/:question"
                exact
                render={route => (
                  <Question {...route} questions={this.state.questions} />
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
