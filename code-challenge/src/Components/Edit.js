import React, { Component } from "react";
import "./Edit.css";

class Edit extends Component {
  render() {
    return (
      <div className="container">
        <div className="editContainer">
          <h1>Edit</h1>
          <div className="edit">
            <form action="/edit/:id" method="post">
              <p>
                <h2>Question:</h2>
                <input className="editPage" type="text" name="question" />
              </p>
              <p>
                <h2>Hint: </h2>
                <input className="editPage" type="text" name="hint" />
              </p>
              <p>
                <h2>Answer: </h2>
                <input className="editPage" type="text" name="answer" />
              </p>
              <p>
                <h2>URL: </h2>
                <input className="editPage" type="text" name="url" />
              </p>
              <p>
                <h2>Type: </h2>
                <select>
                  <option value="HTML">HTML</option>
                  <option value="CSS">CSS</option>
                  <option value="JavaScript">JavaScript</option>
                  <option value="React">React</option>
                  <option value="Express">Express</option>
                  <option value="Node">Node</option>
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

export default Edit;
