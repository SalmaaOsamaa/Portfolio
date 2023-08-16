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
          with <b style={{color:"purple"}}>1 year of experience</b>. <br/> i use Javascript technologies
          in the Front-end and the Back-End, I'm always learning new skills and
          technologies to keep myself updated all the time.
        </p>
        <p className={classes["a-desc"]}>
        I worked as a frontend web developer at <b style={{color:"purple"}}>Ministry of communications and information technology </b> for 7 months where i worked on a several govermental projects, <br/> and currently i'm working as a frontend web developer at <b style={{color:"purple"}}>Ayamedica</b> which is a health care company that provides medical system for schools.
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
            href="https://drive.google.com/file/d/1P7YUse_LI_758-IJS9LhSz0xWgtIpQrx/view?usp=sharing"
            target="_blank"
          >
            <Button>Download My Resume</Button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
