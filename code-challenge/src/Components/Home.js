import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import questionJson from "./Question.json";

class Home extends Component {
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
    let questionTypes = questionJson.map(item => {
      return (
        <div className="container">
          <div className="languages" key={item.question}>
            <Link className="button" to={"/" + item.type}>
              HTML
            </Link>
            <Link className="button" to={"/" + item.type}>
              JavaScript
            </Link>
            <Link className="button" to={"/" + item.type}>
              Express
            </Link>
            <Link className="button" to={"/" + item.type}>
              CSS
            </Link>
            <Link className="button" to={"/" + item.type}>
              React
            </Link>
            <Link className="button" to={"/" + item.type}>
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
