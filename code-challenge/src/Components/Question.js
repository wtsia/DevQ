import React, { Component } from "react";

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
    fetch("https://immense-citadel-86220.herokuapp.com/")
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

  render() {
    const { error, isLoaded, items } = this.state;
    if (error && items) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      let item = items;
      //   for (let i = 0; i < item.length; i++) {
      //     if (item[0].question) {
      //     }
      //   }
      return (
        <div>
          {/* <a href={item[1].question}>Next</a> */}
          <h1>{item[0].question}</h1>
          <input
            className="answer"
            type="text"
            placeholder="Write Your Answer Here! Check Below&darr;"
          />
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
