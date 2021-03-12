import React from "react";
import { motion } from "framer-motion";
import GameModeTab from "./GameModeTab";

import "../stylesheets/dist/home.css";
import Logo from "./Logo";

const gameModes = [
  {
    title: "Quiz",
    imageClass: "quiz",
  },
  {
    title: "Draw & Guess",
    imageClass: "draw-and-guess",
  },
  {
    title: "Most likely",
    imageClass: "most-likely",
  },
  {
    title: "Best artist",
    imageClass: "best-artist",
  },
  {
    title: "Survey",
    imageClass: "survey",
  },
  {
    title: "Who knows you",
    imageClass: "who-knows-you",
  },
];

export default function Home() {
  return (
    <>
      <div className="main-container">
        <div className="info-box half-container">
          <Logo size="64" />
          <div className="content-block">
            <h1>What is mindr?</h1>
            <p>
              Mindr is a mix of several{" "}
              <span className="bold">party & casual</span> games you can play{" "}
              <span className="bold">online with your friends.</span> You can
              enable and disable each game mode according to your needs and pick
              between the{" "}
              <span className="bold">standard or drinking mode.</span>
            </p>
          </div>
          <div className="content-block">
            <h1>What games can we play?</h1>
            <small>Click on a game mode to see how to play.</small>
            <div className="how-to-container">
              {gameModes.map((mode, i) => {
                return (
                  <GameModeTab
                    id={i}
                    title={mode.title}
                    image={mode.imageClass}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="start-game half-container">
          <div className="block">
            <div class="w-100 d-flex justify-content-between align-items-center">
              <h2>Want to join your friends?</h2>
              <a href="#">Where is the code?</a>
            </div>
            <form action="submit" className="form--group-code">
              <input type="text" className="group-code" placeholder="----" />
              <button
                className="btn --primary --lg --block --icon-right"
                type="submit"
              >
                Join group
                <span class="icon circle-arrow-right"></span>
              </button>
            </form>
          </div>
          <div className="block">
            <div className="create-group">
              <h2>You're the first one here?</h2>
              <button className="btn --secondary --lg --block">
                Create a new group
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
