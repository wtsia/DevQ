import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  // constructor(props) {
  //     super(props)
  // }
  render() {
    return (
      <div className="container">
        <div className="languages">
          <button>HTML</button>
          <button>JavaScript</button>
          <button>Express</button>
          <button>CSS</button>
          <button>React</button>
          <button>Node.js</button>
        </div>
      </div>
    );
  }
}

export default Home;
