import React, { Component } from "react";
import "./Edit.css";

class Edit extends Component {
  render() {
    return (
      <div className="container">
        <div className="edit">
          <h1>Edit</h1>
          <div className="edit"> 
          <form action="/edit/:id" method="post">
                <p>
                <label>Question:</label>
                <input type="text" name="question"/>
                </p>
                <p>
                <label>Hint: </label>
                <input type="text" name="hint"/>
                </p>
                <p>
                <label>Answer: </label>
                <input type="text" name="answer"/>
                </p>
                <p>
                <label>URL: </label>
                <input type="text" name="url"/>
                </p>
                <p>
                <label>Type: </label> 
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
