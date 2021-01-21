import React, { Component } from "react";

export default class PickAnswer extends Component {
  render() {
    return (
      <div className="d-flex flex-column mt-4">
        <h4 className="pick-header">Pick an answer</h4>
          <div className="answer-container">
            <div className="answer">
              <h3>Thomas Edison</h3>
            </div>
            <div className="answer">
              <h3>Nikola Tesla</h3>
            </div>
            <div className="answer">
              <h3>Isaac Newton</h3>
            </div>
            <div className="answer">
              <h3>Alexander Graham Bell</h3>
            </div>
          </div>
      </div>
    );
  }
}
