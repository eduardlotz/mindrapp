import React, { Component } from "react";
import "../stylesheets/home.css";

import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";


import GameTask from "./GameTask";
import Navbar from "./Navbar";
import Icon from "./Icon";
import PickAnswer from "./PickAnswer";
import GuessNumber from "./GuessNumber";
import PickPlayer from "./PickPlayer";
import PickImage from "./PickImage";

export default class Home extends Component {
  state = {
    timer: {
      total: 40,
      left: 40,
    },
    round: {
      current: 1,
      total: 20,
    },
    tasks: [
      "Who invented the light bulb?",
      "How tall is the Eiffel Tower?",
      "Who would be most likely to get a face tattoo?",
      "Which picture shows Thomas Edison?",
    ],
    currentTask: 0,
    modes: [<PickAnswer />, <GuessNumber />, <PickPlayer />, <PickImage />],
  };

  startTimer() {
    if (this.state.timer.left == 0) {
      this.timer = setInterval(this.state.timer.total, 1000);
    }
  }

  countDown() {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });

    // Check if we're at zero.
    if (seconds == 0) {
      clearInterval(this.timer);
    }
  }

  selectImage = () => {};

  nextTask = () => {
    this.state.currentTask < this.state.modes.length - 1
      ? this.setState({ currentTask: this.state.currentTask + 1 })
      : this.setState({ currentTask: 0 });
  };

  render() {
    return (
      <>
        <Navbar />
        <GameTask
          task={this.state.tasks[this.state.currentTask]}
          round={this.state.round}
          timer={this.state.timer}
        />
          {this.state.modes.map((item, i) => {
            return this.state.currentTask === i ? item : <></>;
          })}
        <button className="btn-cta glossy floating" onClick={this.nextTask}>
          <span className="text">Submit your answer</span>
          <Icon width="24" name="arrow-right-circle" fill="#ffffff" />
        </button>
      </>
    );
  }
}
