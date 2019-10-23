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
    console.log(this.props)
    fetch(`https://immense-citadel-86220.herokuapp.com/edit/${language}`)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            items: result,
            x: 0
          },(newState) => console.log(this.state, newState));
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
    const { error, isLoaded, items } = this.state;
    if (error && items) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      // let current = this.state.x + 1;
      let item = items;
      console.log(item)
      console.log(items)
    return (
      <div className="container">
        <div className="editContainer">
          <h1>Edit</h1>
          <div className="edit">
            <form action={`https://immense-citadel-86220.herokuapp.com/edit/${this.props.match.params.id}?_method=put`} method="POST">
              <p>
                <h2>Question:</h2>
                <input className="editPage" type="text" name="question" placeholder={items.question}/>
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
}
export default Edit;
