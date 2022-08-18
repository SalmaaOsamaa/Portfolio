import React, { useState } from "react";
import classes from "./Myintro.module.css";
import Slide from 'react-reveal/Slide';
import bye from "../../Images/mymemoji.png";
import me from "../../Images/salma2.svg"
import "../../index.css"

function MyIntro() {
 
  const [imageLoading, setImageLoading] = useState(true);
  const [pulsing, setPulsing] = useState(true);
  const imageLoaded = () => {
    setImageLoading(false);
    setTimeout(() => setPulsing(false), 600);
  };
  return (
    <>
   

    
      <div className={classes.i} id="intro">
        <div className={classes["i-left"]}>
        
            <Slide top>
          <div className={classes["i-left-wrapper"]}>
            
            <h2 className={classes["i-intro"]}>
              Hello I'm Salma Osama <img src={bye} style={{ width: "70px" }} />
            </h2>
            <h1> Front-end Software developer</h1>
            <div className={classes["i-title"]}>
              <div className={classes["i-title-wrapper"]}>
                <div className={classes["i-title-item"]}>
                  A Passionate web developer
                </div>
                <div className={classes["i-title-item"]}>
                  Loves reading tech articles
                </div>
                <div className={classes["i-title-item"]}>
                  Intersted in solving problems
                </div>
              </div>
            </div>
            <div className={classes.desc}>
              A Full Stack Web Developer also a former ITI Trainee who
              specializes in JavaScript Technologies (Node.js, Express, React)
              to build complete web applications with backend API System.
            </div>
          </div>
          </Slide>

        </div>
        
        <div
          initial={{ height: "16rem", opacity: 0 }}
          animate={{
            height: imageLoading ? "16rem" : "auto",
            opacity: imageLoading ? 0 : 1,
          }}
          transition={
            ({ height: { delay: 0, duration: 0.4 } },
            { opacity: { delay: 0.5, duration: 0.4 } })
          }
          onLoad={imageLoaded}
          width="100%"
          className={classes["i-right"]}
        >


          
          <div className={classes["i-bg"]}>
     <Slide right>
            <img src={me}/>
            </Slide>
          </div>
          
        </div>
       
      </div>
    </>
  );
}

export default MyIntro;
