import React, { Component } from "react";

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "",
      hint: "",
      answer: "",
      url: "",
      type: "",
      id: 0
    };
  }
  render() {
    let item = this.props.questions.find(
      challenge => challenge.type === this.props.match.params.type
    );
    return (
      <div className="container" key={item.type}>
        <h1>{item.type}</h1>;
      </div>
    );
  }
}

export default Question;
