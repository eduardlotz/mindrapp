import React, { Component } from "react";

export default class GuessNumber extends Component {
  render() {
    return (
      <div className="d-flex flex-column my-4">
        <h4 className="pick-header">Enter your guess</h4>
          <div className="d-flex align-items-center">
          <input
                className="block"
                type="number"
                placeholder=""
              />
              <h4 className="guess-unit">m</h4>
          </div>
      </div>
    );
  }
}
