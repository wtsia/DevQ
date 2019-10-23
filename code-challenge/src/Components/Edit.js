import React, { Component } from "react";
import "./Edit.css";

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      x: 0
    };
  }

  componentDidMount() {
    let language = this.props.match.params.id;
    fetch(`https://immense-citadel-86220.herokuapp.com/${language}`)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            items: result,
            x: 0
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }



  render() {
    const {items} = this.state
    let item = items
    return (
      <div className="container">
        <div className="editContainer">
          <h1>Edit</h1>
          <div className="edit">
            <form action="/edit/:id?_method=put" method="post">
              <p>
                <h2>Question:</h2>
                <input className="editPage" type="text" name="question" placeholder={this.state.items.question}/>
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
