import React, { Component } from "react";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home.js";
import About from "./Components/About.js";
import Question from "./Components/Question.js";
import QuestionJson from "./Components/Question.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hikes: QuestionJson
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
              <Route path="/home" component={Home} />
              <Route path="/about" component={About} />
              <Route
                path="/:question"
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
