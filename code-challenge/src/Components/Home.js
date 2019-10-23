import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <Link className="button" to={"/HTML"}>
          HTML
        </Link>
        <Link className="button" to={"/CSS"}>
          CSS
        </Link>
        <Link className="button" to={"/JavaScript"}>
          JavaScript
        </Link>
        <Link className="button" to={"/Express"}>
          Express
        </Link>
        <Link className="button" to={"/React"}>
          React
        </Link>
        <Link className="button" to={"/Node"}>
          Node
        </Link>
      </div>
    );
  }
}

export default Home;
