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
        <div className="container" key={item.question}>
          <Link className="button" to={"/" + item.question}>
            HTML
          </Link>
          <Link className="button" to={"/" + item.question}>
            JavaScript
          </Link>
          <Link className="button" to={"/" + item.question}>
            Express
          </Link>
          <Link className="button" to={"/" + item.question}>
            CSS
          </Link>
          <Link className="button" to={"/" + item.question}>
            React
          </Link>
          <Link className="button" to={"/" + item.question}>
            Node
          </Link>
        </div>
      );
    });
    return <div> {questionTypes} </div>;
  }
}

export default Home;
