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
    return <h1>{this.item.type}</h1>;
  }
}

export default Question;
