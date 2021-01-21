import React, { Component } from "react";
import Logo from "./Logo";
import Icon from "./Icon";
import profileImage from "../assets/eddie-avatar.jpg";

export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className="d-flex">
          <div className="user-block mr-4">
            <img className="img" src={profileImage} alt="user"/>
            <span className="name">eddie</span>
          </div>
          <div className="points-counter">
            <span className="number">1800</span>
            <span className="icon"></span>
          </div>
        </div>
        <Logo color="#F0F0F1" size="80" />

        <div className="d-flex">
          <button className="btn-icon">
            <Icon name="question-mark" width="32" fill="#DEDEDE" />
          </button>
          <span className="group-code">5126</span>
        </div>
      </nav>
    );
  }
}
