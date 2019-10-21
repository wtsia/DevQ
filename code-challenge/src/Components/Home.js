import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import QuestionJson from "./Question.json";

class Home extends Component {
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
    let questionTypes = QuestionJson.map(item => {
      return (
        <div className="container">
          <div className="languages" key={item.question}>
            <Link className="button" to={"/" + item.question.type}>
              HTML
            </Link>
            <Link className="button" to={"/" + item.question.type}>
              JavaScript
            </Link>
            <Link className="button" to={"/" + item.question.type}>
              Express
            </Link>
            <Link className="button" to={"/" + item.question.type}>
              CSS
            </Link>
            <Link className="button" to={"/" + item.question.type}>
              React
            </Link>
            <Link className="button" to={"/" + item.question.type}>
              Node
            </Link>
          </div>
        </div>
      );
    });
    return <div> {questionTypes} </div>;
  }
}

export default Home;
