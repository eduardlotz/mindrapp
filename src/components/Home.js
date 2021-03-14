import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GameModeTab from "./GameModeTab";
import Modal from "react-modal";

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

Modal.setAppElement("#root");

export default function Home() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedMode, setSelectedMode] = useState("");

  const variants = {
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        delay: 0.5 + i * 0.1,
      },
    }),
    hidden: { opacity: 0, scale: 0.9 },
  };

  const textBlockVariants = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
    hidden: { opacity: 0, scale: 0.9, transition: { when: "afterChildren" } },
  };

  function openModal(content) {
    setSelectedMode(content);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <div className="main-container">
        <AnimatePresence
          initial={modalIsOpen}
          animate="visible"
          exit="hidden"
          variants={textBlockVariants}
        >
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
          >
            <h2>{selectedMode.title}</h2>
            <i className={`image ${selectedMode.imageClass}`} alt="books" />

            <button className="modal-close" onClick={closeModal}>
              close
            </button>
            <div>I am a modal</div>
          </Modal>
        </AnimatePresence>
        <div className="info-box half-container">
          <Logo size="64" />
          <motion.div
            initial="hidden"
            animate="visible"
            variants={textBlockVariants}
            className="content-block"
          >
            <h1>What is mindr?</h1>
            <p>
              Mindr is a mix of several{" "}
              <span className="bold">party & casual</span> games you can play{" "}
              <span className="bold">online with your friends.</span> You can
              enable and disable each game mode according to your needs and pick
              between the{" "}
              <span className="bold">standard or drinking mode.</span>
            </p>
          </motion.div>
          <div className="content-block">
            <h1>What games can we play?</h1>
            <small>Click on a game mode to see how to play.</small>
            <div className="how-to-container">
              {gameModes.map((mode, i) => {
                return (
                  <AnimatePresence>
                    <motion.div
                      key={i}
                      custom={i}
                      initial="hidden"
                      animate="visible"
                      variants={variants}
                      className="game-mode-tab"
                      onClick={() => openModal(mode)}
                    >
                      <i className={`image ${mode.imageClass}`} alt="books" />
                      <h5>{mode.title}</h5>
                    </motion.div>
                  </AnimatePresence>
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
