import React, { Component } from "react";
import "./Question.css";

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      x: 3
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
            items: result
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
    this.setState({
      x: this.state.x + 1
    });
  };

  previousQuestion = () => {
    this.setState({
      x: this.state.x - 1
    });
  };

  render() {
    const { error, isLoaded, items } = this.state;
    if (error && items) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      let item = items;
      return (
        <div>
          <h1>{item[this.state.x].question}</h1>
          <input
            className="answer"
            type="text"
            placeholder="Write Your Answer Here! Check Below&darr;"
          />
          <button onClick={this.previousQuestion}>&larr;</button>
          <button onClick={this.nextQuestion}>&rarr;</button>
          <div className="answers">
            <h2>Hint:</h2>
            <p>{item[this.state.x].hint}</p>
            <h2>Answer:</h2>
            <p>{item[this.state.x].answer}</p>
            <h2>
              <a href={item[this.state.x].url}>[ Documentation ]</a>
            </h2>
          </div>
        </div>
      );
    }
  }
}

export default Question;
