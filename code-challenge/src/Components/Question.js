import React, { Component } from "react";
import "./Question.css";

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
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

  //   nextQuestion = () => {
  //     let item = this.state;
  //     for (let x = 0; x < item.length; x++) {
  //       item[x]++;
  //     }
  //   };

  //   previousQuestion = () => {
  //     let item = this.state;
  //     for (let x = 0; x < item.length; x++) {
  //       item[x]--;
  //     }
  //   };

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
          <h1>{item[0].question}</h1>
          <input
            className="answer"
            type="text"
            placeholder="Write Your Answer Here! Check Below&darr;"
          />
          {/* <button onClick={previousQuestion}>&larr;</button>
          <button onClick={nextQuestion}>&rarr;</button> */}
          <div className="answers">
            <h2>Hint:</h2>
            <p>{item[0].hint}</p>
            <h2>Answer:</h2>
            <p>{item[0].answer}</p>
            <h2>
              <a href={item[0].url}>[ Documentation ]</a>
            </h2>
          </div>
        </div>
      );
    }
  }
}

export default Question;
