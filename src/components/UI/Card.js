import React from "react";
import classes from "./card.module.css";
import ProjectModal from "./Modal";
import Button from "./Button";
function Card({ id, image, link, text,handleTargetProject }) {
  return (
    <div className={classes.p}>
      <div className={classes["p-browser"]}>
        <div className={classes["p-circle"]}></div>
        <div className={classes["p-circle"]}></div>
        <div className={classes["p-circle"]}></div>
      </div>
      <div className={classes["image-container"]}>
        <img src={image} className={classes["project-image"]} />
        <div className={classes["p-code"]}>
          <p className={classes.text}>
            <p>{text}</p>
            
          </p>
          <div className={classes.modal}>
          </div>
          <Button onClick={() => handleTargetProject(id)}> Details </Button>

        </div>
      </div>
    </div>
  );
}

export default Card;
