import React, { useState } from "react";
import Modal from "react-modal";
import Button from "./Button";
import classes from "../UI/button.module.css";
import "../../index.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./projectmodal.css";
import { height, width } from "@mui/system";
Modal.setAppElement("#root");
function ProjectModal({ isOpen, closeModal, project }) {
  return (
    <div>
      <Modal
        style={{
          overlay: {
            position: 'fixed',
            backgroundColor: 'rgba(255, 255, 255, 0.75)'


          },
          content: {
            position: 'absolute',
            opacity:1,
            background: '#fff',
            color: "black",
            width: "60%",
            height: "45vh",
            margin: "auto",
            padding: "40px",
            borderRadius: "15px",
           
          },
        }}
        isOpen={isOpen}
        onRequestClose={() => closeModal()}
      >
        <h2>{project.text}</h2>
        <p>{project.desc}</p>
        <img src={project.modalimg} /> <br />
        <button
          
          className="button"
          onClick={() => closeModal()}
        >
          Close Me
        </button>
        <button className="button-git">
          <a href={project.link} target="_blank">
            <GitHubIcon style={{ color: "black" }}>{project.link}</GitHubIcon>
          </a>
        </button>
      </Modal>
    </div>
  );
}

export default ProjectModal;
