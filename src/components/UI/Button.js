import React from "react";
import classes from "./button.module.css";
import { motion } from "framer-motion";

function Button(props) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      onHoverStart={(e) => {}}
      onHoverEnd={(e) => {}}
      onClick={props.onClick}
      className={classes.button}
    >
      {props.children}
    </motion.button>
  );
}

export default Button;
