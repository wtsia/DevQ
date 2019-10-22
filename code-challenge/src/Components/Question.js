import React, { Component } from "react";
import question from './Question.json'

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: {question}
      
    };
  }
  render() {
    let questions = this.props.questions.find(
      challenge => challenge.type === this.props.match.params.type
    );
    return (
      <div className="container" key={question.type}>
        <h1>{question[0].question}</h1>
        <h2>{question[0].type}</h2>
        <h2>{question[0].hint}</h2>
      </div>
    );
  }
}

export default Question;
