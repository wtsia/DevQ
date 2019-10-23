import React, { Component } from "react";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import "./Question.css";

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      x: 0
    };
  }

  componentDidMount() {
    let language = this.props.match.params.question;
    fetch(`https://immense-citadel-86220.herokuapp.com/${language}`)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            items: result,
            x: 0
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  nextQuestion = () => {
    const { items } = this.state;
    let current = this.state.x;
    console.log(items.length);
    console.log(this.state.x);
    if (current < items.length - 1) {
      this.setState({
        x: this.state.x + 1
      });
    }
  };

  previousQuestion = () => {
    let current = this.state.x;
    if (current > 0) {
      this.setState({
        x: this.state.x - 1
      });
    }
  };

  render() {
    const { error, isLoaded, items } = this.state;
    if (error && items) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      let current = this.state.x + 1;
      let item = items;
      return (
        <div>
          <h1>{item[this.state.x].question}</h1>
          <p>
            {current}/{items.length}
          </p>
          <input
            className="answer"
            type="text"
            placeholder="Write Your Answer Here! Check Below."
          />
          <button onClick={this.previousQuestion}>&larr;</button>
          <button onClick={this.nextQuestion}>&rarr;</button>
          <button href="">Edit</button>
          <div className="answers">
            <h2>Hint:</h2>
            <p>{item[this.state.x].hint}</p>
            <h2>Answer:</h2>
            <p>{item[this.state.x].answer}</p>
            <h2>
              <a target="_blank" href={item[this.state.x].url}>
                [ Documentation ]
              </a>
            </h2>
            <Link to={"/Edit"}>
              <h1 className="link Edit">[ Edit ]</h1>
            </Link>
          </div>
        </div>
      );
    }
  }
}

export default Question;
