import React from "react";
import AboutImg from "../../Images/image with no background.png";
import Button from "../UI/Button";
import classes from "./about.module.css"
import tech from "../../Images/icons.svg";
import Fade from "react-reveal/Fade";

function About(props) {
  return (

    <div className={classes.a} id="about">
      
      <div className={classes["a-left"]}>
        <div></div>
        <div className={classes["a-card"]}>
          <img className={classes.gify} src="https://media.giphy.com/media/uB86ZyWQsnFSGYe2sA/giphy.gif" />
        </div>
      </div>
      <div className={classes["a-right"]}>
        <h1 className={classes["a-title"]}>About Me</h1>
        <p className={classes["a-sub"]}>
          I'm a Software developer Who lives in {" "}
          <a href="http://maps.google.com/?q=4470351 Heliopolis, Al Matar, El Nozha, Cairo Governorate " target="_blank" className={classes.resume}>
            <b className={classes.location} style={{color:"#D4F1F4"}}>Cairo,Egypt </b>
          </a>
          . {" "}
        </p>
        <p className={classes["a-desc"]}>
          I'm a passionate, detail-oriented and versatile Front-End developer
          who creates codes out of pretty designs. i use Javascript technologies
          in the Front-end and the Back-End, Always learning new skills and
          technologies to add to what I already know.
        </p>
        <p className={classes["a-desc"]}>
          My journey started after graduating with two years i learned HTML,CSS
          and then i started knowing more about JavaScript and how to add logic
          to my web pages, So i started solving problems and knowing more about Data structures and algorithms 
          then i got to know and create projects with some of Javascript frameworks like angular and libraries like React, i found my-self more into React..
          It has transformed the way I think about front-end development so i started learning more about it.
        </p>

        <div className={classes.tech}>
          <p className={classes["p-tech"]}>Technologies that i use : </p>
          <Fade left big>
            <img src={tech} alt="techs" className={classes.techs} />
          </Fade>
        </div>
        <div className={classes["a-resume"]}>
          <a
            className={classes.resume}
            href="https://drive.google.com/file/d/1Q7RzpBEJCcfEx7DBhwPRjqVtuJY6mpha/view?usp=sharing"
            target="_blank"
          >
            <Button>Download Resume</Button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
