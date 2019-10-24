import React, { Component } from "react";
import "./New.css";

class New extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      x: 0
    };
  }

  render() {
    return (
      <div className="container">
        <div className="editContainer">
          <h1>Add a New Question!</h1>
          <div className="edit">
            <form
              action={`https://immense-citadel-86220.herokuapp.com/new`}
              method="POST"
            >
              <p>
                <h2>Question:</h2>
                <input
                  className="editPage"
                  type="text"
                  name="question"
                  required
                />
              </p>
              <p>
                <h2>Hint: </h2>
                <input className="editPage" type="text" name="hint" required />
              </p>
              <p>
                <h2>Answer: </h2>
                <input
                  className="editPage"
                  type="text"
                  name="answer"
                  required
                />
              </p>
              <p>
                <h2>Read More URL: </h2>
                <input className="editPage" type="text" name="url" required />
              </p>
              <p>
                <h2>Type: </h2>
                <select className="editPage" type="text" name="type">
                  <option name="type" value="HTML">
                    HTML
                  </option>
                  <option name="type" value="CSS">
                    CSS
                  </option>
                  <option name="type" value="JavaScript">
                    JavaScript
                  </option>
                  <option name="type" value="React">
                    React
                  </option>
                  <option name="type" value="Express">
                    Express
                  </option>
                  <option name="type" value="Node">
                    Node
                  </option>
                </select>
              </p>
              <input type="submit" value="Post" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default New;
