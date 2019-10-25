import React, { Component } from "react";
import "./About.css";

class About extends Component {
  render() {
    return (
      <div className="container">
        <div className="About">
          <h1>About Us // Read Me</h1>
          <div className="answers">
            <h2>Description:</h2>
            <p>
              DevQ is a study platform for Software Engineers. Users can choose
              from a variety of languages to study, where they will then be
              prompted with a question, an input section to note their answer, a
              hint, an answer, and a link to further documentation. Further,
              users can add their own questions to existing languages, edit
              questions, and delete questions.
            </p>
            <h2>Current Features:</h2>
            <p>
              Starting with the DevQ navigation, users can route to the home
              page clicking on "DevQ", to the add new question page with "Q+",
              and the about page with "About". The body consists of links to
              various categories of questions, which will then take users to the
              question page; the question page will dynamically fill with
              questions matching that type, with an input to note their answer,
              a hint, an answer, and a link to an addtional resource for
              continued reading. On this page, users can choose to edit the
              question, which will direct them to the edit page; on the edit
              page, users will then re-enter the information for the question
              with any edits they wish to make, with the option to delete the
              question altogether. To creat new questions, users can click on
              the "Q+", which will direct them to the new question page. On this
              page, users will enter the question, hint, answer, a link to
              additional resources, and question type, with all inputs being
              required. Submitting the question will push them to the database,
              where they will then be requested and displayed in their
              respective category types when the user goes back to questions.
            </p>
            <h2>Features In Progress:</h2>
            <p>
              Features in progress include adding a customizeable timer to each
              question, adding a toggle feature to hide and display hints and
              answers, and the ability to edit questions without requiring users
              to re-enter the question data.
            </p>
            <h2>Technologies Used:</h2>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Express</li>
              <li>Node</li>
              <li>Mongoose</li>
              <li>Heroku</li>
              <li>GitHub</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
