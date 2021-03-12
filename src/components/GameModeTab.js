import React from "react";
import { motion } from "framer-motion";

export default function GameModeTab(props) {
  return (
    <motion.div
      whileTap={{ scale: 0.9 }}
      transition={{
        type: "spring",
        default: { duration: 0.2 },
      }}
      
      className="game-mode-tab"
    >
      <i className={`image ${props.image}`} alt="books" />
      <h5>{props.title}</h5>
    </motion.div>
  );
}
