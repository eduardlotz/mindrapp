import React from "react";
import "./App.css";
import anime from "animejs/lib/anime.es.js";
import SvgLines from "react-mt-svg-lines";

import logo from "./assets/mindr-logo.svg";
import imgDoYouKnow from "./assets/do-you-know.jpg";
import imgSurveyResults from "./assets/survey-results.jpg";
import imgGuessResults from "./assets/results-guess.jpg";

class App extends React.Component {
  componentDidMount() {
    // Wrap every letter in a span
    var textWrapper = document.querySelector(".ml11 .letters");
    /* eslint-disable no-control-regex */
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /([^\x00-\x80]|\w)/g,
      "<span class='letter'>$&</span>"
    );

    var tl = anime.timeline({
      easing: "easeOutExpo",
      duration: 750,
    });

    tl.add({
      targets: ".ml11 .line",
      scaleY: [0, 1],
      opacity: [0.5, 1],
      easing: "easeOutExpo",
      duration: 700,
    }).add({
      targets: ".ml11 .letter",
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 600,
      offset: "-=775",
      delay: (el, i) => 34 * (i + 1),
    });
  }

  render() {
    return (
      <div className="background-container">
        <SvgLines animate={true} duration={5000}>
          <svg
            className="line-left"
            viewBox="0 0 1019 1080"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-1079 465.363C-839.848 273.682 -633.404 116.893 -502.27 159.341C-371.136 201.788 -395.434 381.524 -310.474 422.329C-225.514 463.134 -150.129 411.337 -90.4288 357.141C-30.7282 302.946 87.5281 196.938 190.488 246.388C293.449 295.838 276.306 460.676 273.892 532.119C271.479 603.561 283.262 772.064 322.631 846.782C362 921.5 410 892 425 951.5C440 1011 292.96 1104.09 388 1149.74C483.04 1195.38 641.682 1087.66 770.94 1149.74"
              stroke="#F6F9FE"
              stroke-width="6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </SvgLines>
        <div className="form-container">
          <img src={logo} className="logo" alt="logo" />
          <form>
            <h1 className="ml11">
              <span class="text-wrapper">
                <span class="letters">
                  Something new to play with your friends online{" "}
                </span>
              </span>
            </h1>
            <p className="subheader blur-in delay-3">
              Enter your email and you’ll get notified when it’s ready.
            </p>
            <div className="d-flex justify-content-center align-items-center w-100 input-container blur-in delay-3">
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
        <div className="images-container fade-in-bottom delay-3">
          <img src={imgGuessResults} className="preview-img a" alt="Gamemode Quiz"/>
          <img src={imgSurveyResults} className="preview-img b" alt="Gamemode Survey"/>
          <img src={imgDoYouKnow} className="preview-img c" alt="Gamemode Do you know me?"/>
        </div>

        <SvgLines animate={true} duration={5000}>
          <svg
            className="line-right"
            viewBox="0 0 751 1052"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M749 1049.5C472.676 975.065 241.965 908.701 223.456 832.023C204.946 755.346 377.483 723.958 377.483 671.046C377.483 618.134 298.156 592.575 223.456 575.536C148.756 558.496 2 524.417 2 460.295C2 396.173 158.011 364.785 223.456 348.642C288.901 332.5 466 270 486 247.5C506 225 428.5 198 444 174.5C459.5 151 679.5 239.689 679.5 180.5C679.5 121.311 565 27.5 565 -53"
              stroke="#4A8CEF"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </SvgLines>
      </div>
    );
  }
}

export default App;
