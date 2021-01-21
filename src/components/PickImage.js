import React, { Component } from "react";
import bellImg from "../assets/bell.jpg";
import edisonImg from "../assets/edison.jpg";
import teslaImg from "../assets/tesla.jpg";
import newtonImg from "../assets/newton.jpg";

export default class PickImage extends Component {
  render() {
    return (
      <div className="d-flex flex-column mt-4">
        <h4 className="pick-header">Pick an image</h4>
          <div className="answer-container">
            <img className="image" src={bellImg} id={1}/>
            <img className="image" src={edisonImg} id={2}/>
            <img className="image" src={teslaImg} id={3}/>
            <img className="image" src={newtonImg}id={4}/>
          </div>
      </div>
    );
  }
}
