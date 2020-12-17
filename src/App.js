import React from "react";
import "./App.css";
import anime from "animejs/lib/anime.es.js";

import leftDecorativeLine from "./assets/decorativeLineLeft.svg";
import rightDecorativeLine from "./assets/decorativeLineRight.svg";
import logo from "./assets/mindr-logo.svg";
import imgDoYouKnow from "./assets/do-you-know.jpg";
import imgSurveyResults from "./assets/survey-results.jpg";
import imgGuessResults from "./assets/results-guess.jpg";

class App extends React.Component {
  componentDidMount() {
    // Wrap every letter in a span
var textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\xFF]|\w)/g, "<span class='letter'>$&</span>");

    var tl = anime.timeline({
      easing: 'easeOutExpo',
  duration: 750
    });

    tl.add({
      targets: '.ml11 .line',
      scaleY: [0,1],
      opacity: [0.5,1],
      easing: "easeOutExpo",
      duration: 700
    }).add({
      targets: '.ml11 .letter',
      opacity: [0,1],
      easing: "easeOutExpo",
      duration: 600,
      offset: '-=775',
      delay: (el, i) => 34 * (i+1)
    });
  }

  render() {
    return (
      <div className="background-container">
        <img
          src={leftDecorativeLine}
          className="line-left"
          alt="decorative line"
        />

        <div className="form-container">
          <img src={logo} className="logo" alt="logo" />
          <form>
            <h1 className="ml11">
              <span class="text-wrapper">
                <span class="letters">
                  Something new to play with your friends online                </span>
              </span>
            </h1>
            <p className="subheader">
              Enter your email and you’ll get notified when it’s ready.
            </p>
            <div className="d-flex justify-content-center align-items-center w-100 input-container">
              <input
                className="align-self-center mr-3"
                type="email"
                placeholder="Enter your email"
              />
              <button className="btn-cta">Notify me!</button>
            </div>
          </form>
        </div>

        {/* preview images on the right side */}
        <img
          src={imgGuessResults}
          className="anim-float anim-fadein preview-img a"
          alt="decorative line"
        />
        <img
          src={imgSurveyResults}
          className="anim-float anim-fadein preview-img b"
          alt="decorative line"
        />
        <img
          src={imgDoYouKnow}
          className="anim-float anim-fadein preview-img c"
          alt="decorative line"
        />

        <img
          src={rightDecorativeLine}
          className="line-right"
          alt="decorative line"
        />
      </div>
    );
  }
}

export default App;
