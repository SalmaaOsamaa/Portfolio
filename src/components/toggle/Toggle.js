import React, { useContext } from "react";
import classes from "./toggle.module.css";
import sun from "../../Images/sun.png";
import moon from "../../Images/night.png";
import { ThemeContext } from "../../context";
import { motion } from "framer-motion";

function Toggle() {
  const theme = useContext(ThemeContext);
  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };
  return (
    <div className={classes.t}>
      <img src={sun} className={classes["t-icon"]} />
      <img src={moon} className={classes["t-icon"]} />
      <div
        
        className={classes["t-button"]}
        onClick={handleClick}
        style={{ left: theme.state?.darkMode ? 0 : 25 }}
      />
    </div>
  );
}

export default Toggle;
