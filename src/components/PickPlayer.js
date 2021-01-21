import React, { Component } from "react";

import avatarEddie from "../assets/eddie-avatar.jpg";
import avatarBenDover from "../assets/bendover-avatar.jpg";
import avatarMary from "../assets/mary-avatar.jpg";
import avatarJeff from "../assets/jeff-avatar.jpg";

export default class PickPlayer extends Component {
  render() {
    return (
      <div className="d-flex flex-column mt-4">
        <h4 className="pick-header">Pick a player</h4>
        <div className="answer-container pick-player">
          <div className="player">
            <img className="player-img" src={avatarEddie} alt=""/>
            <h3>eddie</h3>
          </div>
          <div className="player">
            <img className="player-img" src={avatarBenDover} alt=""/>
            <h3>Ben Dover</h3>
          </div>
          <div className="player">
            <img className="player-img" src={avatarMary} alt=""/>
            <h3>Mary</h3>
          </div>
          <div className="player">
            <img className="player-img" src={avatarJeff} alt=""/>
            <h3>Jeff</h3>
          </div>
          <div className="player">
            <img className="player-img" src={avatarEddie} alt=""/>
            <h3>eddie</h3>
          </div>
          <div className="player">
            <img className="player-img" src={avatarBenDover}alt="" />
            <h3>Ben Dover</h3>
          </div>
          <div className="player">
            <img className="player-img" src={avatarMary} alt=""/>
            <h3>Mary</h3>
          </div>
          <div className="player">
            <img className="player-img" src={avatarJeff} alt=""/>
            <h3>Jeff</h3>
          </div>
          <div className="player">
            <img className="player-img" src={avatarMary}alt="" />
            <h3>Mary</h3>
          </div>
          <div className="player">
            <img className="player-img" src={avatarJeff} alt=""/>
            <h3>Jeff</h3>
          </div>
        </div>
      </div>
    );
  }
}
