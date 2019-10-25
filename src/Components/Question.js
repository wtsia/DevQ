import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Question.css";
import "./Edit";

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
    if (language !== "DevQ") {
      fetch(`https://immense-citadel-86220.herokuapp.com/${language}`)
        .then(res => res.json())
        .then(
          result => {
            this.setState(
              {
                isLoaded: true,
                items: result,
                x: 0
              },
              newState => console.log(this.state, newState)
            );
          },
          error => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        );
    }
    if (language === "DevQ") {
      this.setState({
        isLoaded: false
      });
    }
  }

  nextQuestion = () => {
    const { items } = this.state;
    let current = this.state.x;
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

toggleAnswer = () => {
let x = document.getElementById('answer')
if( x.style.display === 'none')
{
x.style.display = "block"
}
else{
  x.style.display = "none"
}
}

toggleHint = () => {
  let x = document.getElementById('hint')
  if( x.style.display === 'none')
  {
  x.style.display = "block"
  }
  else{
    x.style.display = "none"
  }
  }


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
            placeholder="Write Your Answer Here &rarr; Check Below &darr;"
          />
          <button onClick={this.previousQuestion}>&larr;</button>
          <button onClick={this.nextQuestion}>&rarr;</button>
          <Link to={"/Edit/" + item[this.state.x]._id}>
            <button>Edit</button>
          </Link>
          <div className="answers">
            <h2 onClick={this.toggleHint}>[ Hint ]</h2>
            <p id="hint" >{item[this.state.x].hint}</p>
            <h2 onClick={this.toggleAnswer}>[ Answer ]</h2>
            <p id="answer">{item[this.state.x].answer}</p>
            <h2>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={item[this.state.x].url}
              >
                [ Documentation ]
              </a>
            </h2>
          </div>
        </div>
      );
    }
  }
}

export default Question;