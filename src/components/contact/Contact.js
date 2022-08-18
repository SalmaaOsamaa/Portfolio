import React, {useState} from "react";
import classes from "./contact.module.css";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import EmailIcon from "@mui/icons-material/Email";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Form from "../UI/Form";
import Fade from "react-reveal/Fade";
import bye from "../../Images/memoji.png";
import Modal from "react-modal"
import { textAlign, width } from "@mui/system";

function Contact() {
  const[ModalOpen, setModalIsOpen] = useState(false)
const handleModal = () =>{
  setModalIsOpen(true)
}
const closeModal = () => {
  setModalIsOpen(false);
}
 
  return (
    <Fade bottom>
    
  
      <div className={classes.c} id="contact">
        <div className={classes["c-bg"]}></div>
        <div className={classes["c-wrapper"]}>
          <div className={classes["c-left"]}>
            <h1 className={classes["c-title"]}>
              Contact me anytime <img src={bye} style={{ width: "80px" }} />
            </h1>

            <div className={classes["c-info"]}>
              <div className={classes["c-info-item"]}>
                <PhoneAndroidIcon className={classes["c-icon"]} />
                +20-11-2489-3849
              </div>
              <div className={classes["c-info-item"]}>
                <EmailIcon className={classes["c-icon"]} />
                salma.usama1996@gmail.com
              </div>
              <div className={classes["c-info-item"]}>
                <LocationCityIcon className={classes["c-icon"]} />
                Heliopolis Al Matar El Nozha Cairo Governorate 4470351
              </div>
              <div className={classes["c-info-item"]}>
                <GitHubIcon className={classes["c-icon"]} />
                <a
                  className={classes["a-contact"]}
                  href="https://github.com/SalmaaOsamaa"
                  target="_blank"
                >
                  Github Account
                </a>
              </div>
              <div className={classes["c-info-item"]}>
                <LinkedInIcon className={classes["c-icon"]} />
                <a
                  className={classes["a-contact"]}
                  href="https://www.linkedin.com/in/salma-osama-12596sall/"
                  target="_blank"
                >
                  LinkedIn account
                </a>
              </div>
            </div>
          </div>

          <div className={classes["c-right"]}>
            <p className={classes["c-desc"]}>
              <b style={{    fontFamily: 'Gochi Hand , cursive', fontSize:"larger"}}>Send an Email 👩🏻‍💻</b> <br />
              I'd love to hear from you, You can fill this form to discuss any
              project you need Send your inquiry here and i'll recieve it and
              Contact you back !
            </p>

            <Form handleModalOpen = {handleModal} />
          </div>
        </div>
     <Modal  isOpen={ModalOpen} 
       style={{
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.75)'
        },
        content: {
          height:"30vh",
          width:"40%",
          margin:"auto",
          position: 'absolute',
          top: '40px',
          left: '40px',
          right: '40px',
          bottom: '40px',
          border: '1px solid #ccc',
          borderRadius:"10px",
          background: '#fff',
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
          borderRadius: '4px',
          outline: 'none',
          padding: '20px',
          textAlign: "center"
        }
      }}
      onRequestClose={() => closeModal()}
     >
      <h1 style={{    fontFamily: 'Gochi Hand , cursive', fontSize:"larger"}}>Thank you for your message</h1>
      <p style={{    fontFamily: 'Gochi Hand , cursive', fontSize:"larger"}}>I'll reach you as soon as possible 🥰</p>
      <button
          style={{ margin: "15px" ,width:"50%"}}
          className="button"
          onClick={() => closeModal()}
        >
          Close Me
        </button>
     </Modal>
      </div>
      
    </Fade>
  );
}

export default Contact;
