import React, { Component } from "react";

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "",
      hint: "",
      answer: "",
      url: "",
      type: ""
    };
  }
  render() {
    let item = this.props.question.find(
      question => question.type === this.props.match.params.type
    );
    return (
      <div className="container" key={item.type}>
        return <h1>{item.type}</h1>;
      </div>
    );
  }
}

export default Question;
