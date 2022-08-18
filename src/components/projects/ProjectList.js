import Card from "../UI/Card";
import { frontprojects } from "../../data";
import { backprojects } from "../../backdata";
import { fullstack } from "../../fullstackdata";
import classes from "./projectlist.module.css";
import ProjectModal from "../UI/Modal";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import Tabs from "react-bootstrap/Tabs";
import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import projectimage from "../../Images/newimage.png";
import ScrollToTop from "react-scroll-to-top";

import "../../index.css";
function ProjectList({ link, text }) {
  const [key, setKey] = useState("home");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [targetProject, setTargetProject] = useState({});
  const [modalShow, setModalShow] = React.useState(false);
  let handleCloseModal = () => {
    setIsModalOpen(false);
    setTargetProject({});
  };
  let handleTargetFrontEndProject = (id) => {
    let targetFrontend = frontprojects.find((r) => r.id == id);
    setTargetProject(targetFrontend);
    setIsModalOpen(true);
  };
  let handleTargetBackendEndProject = (id) => {
    let targetBackend = backprojects.find((r) => r.id == id);
    setTargetProject(targetBackend);
    setIsModalOpen(true);
  };

  let handleTargetFullstackProject = (id) => {
    let targetFullstack = fullstack.find((r) => r.id == id);
    setTargetProject(targetFullstack);
    setIsModalOpen(true);
  };
  return (
    <div className={classes.pl} id="project">
      <ScrollToTop
        className="scroll"
        smooth
        width="30"
        color="#ffff"
        viewBox="0 0 32 32"
        svgPath="M15.997 13.374l-7.081 7.081L7 18.54l8.997-8.998 9.003 9-1.916 1.916z"
      />
      <div className={classes["pl-texts"]}>
        <h1 className={classes.title}>
          My Projects <img src={projectimage} style={{ width: "80px" }} />{" "}
        </h1>
        <p className={classes.desc}>
          {" "}
          <b>Here’s what I’ve been up to lately</b>, This is a list of my projects
          using different technologies
        </p>
        <p className={classes.desc}><b>You can check the code on github</b></p>

        <Tabs
          className="nav nav-tabs nav-justified border border-dark"
          style={{ background: `linear-gradient(to right, #C9D6FF, #E2E2E2)`, borderRadius: "5px" }}
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
        >
          <Tab className={classes.tabs} eventKey="home" title="Front-End">
            <div className={classes.list}>
              <Fade left>
                {frontprojects.map((item) => {
                  return (
                    <Card
                      handleTargetProject={handleTargetFrontEndProject}
                      key={item.id}
                      id={item.id}
                      image={item.image}
                      link={item.link}
                      text={item.text}
                    />
                  );
                })}
              </Fade>
            </div>
          </Tab>
          <Tab eventKey="profile" title="Back-End">
            <div className={classes.list}>
              <Fade left>
                {backprojects.map((item) => {
                  return (
                    <Card
                      handleTargetProject={handleTargetBackendEndProject}
                      key={item.id}
                      id={item.id}
                      image={item.image}
                      link={item.link}
                      text={item.text}
                    />
                  );
                })}
              </Fade>
            </div>
          </Tab>
          <Tab eventKey="contact" title="Full-Stack">
            <div className={classes.list}>
              <Fade left>
                {fullstack.map((item) => {
                  return (
                    <Card
                      handleTargetProject={handleTargetFullstackProject}
                      key={item.id}
                      id={item.id}
                      image={item.image}
                      link={item.link}
                      text={item.text}
                    />
                  );
                })}
              </Fade>
            </div>
          </Tab>
        </Tabs>
      </div>

      <ProjectModal
        closeModal={handleCloseModal}
        isOpen={isModalOpen}
        project={targetProject}
      />
    </div>
  );
}
export default ProjectList;
