import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

class Home extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       error: null,
  //       isLoaded: false,
  //       items: []
  //     };
  //   }

  //   componentDidMount() {
  //     fetch("https://immense-citadel-86220.herokuapp.com/")
  //       .then(res => res.json())
  //       .then(
  //         result => {
  //           this.setState({
  //             isLoaded: true,
  //             items: result
  //           });
  //         },
  //         error => {
  //           this.setState({
  //             isLoaded: true,
  //             error
  //           });
  //         }
  //       );
  //   }

  render() {
    const questionTypes = [
      "HTML",
      "CSS",
      "JavaScript",
      "Express",
      "React",
      "Node"
    ];
    return (
      <div className="container">
        {questionTypes.map(item => {
          return (
            <Link className="button" to={"/" + item}>
              {item}
            </Link>
          );
        })}
      </div>
    );
  }
}

export default Home;
