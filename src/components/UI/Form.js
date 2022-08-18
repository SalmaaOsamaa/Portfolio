import React, {useState} from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import classes from './form.module.css';
import Slide from 'react-reveal/Slide';
import Modal from "react-modal"

function Form(props) {
 
  const {
    register,
    handleSubmit,
    reset,
    handleModalOpen,
    formState: { errors },
  } = useForm();
  const onSubmit = (formData) => {
   
    emailjs
      .send("service_6fpglek", "template_62afkfc", formData, "LoZQRRYmIA929kIIg")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(errors.text);
        }
      );
    reset();
    props.handleModalOpen()
  };

  return (

<div>


    <form  className={classes.form} onSubmit={handleSubmit(onSubmit)}  >
      <Slide bottom>
      <input className={classes.input}
        type="text"
        placeholder="Your Full-Name"
        {...register("name", { required: true, maxLength: 80 })}
      />
      <input className={classes.input}
        type="text"
        placeholder="Subject"
        {...register("subject", { required: true, maxLength: 100 })}
      />
      <input className={classes.input}
        type="text"
        placeholder="Your-Email"
        {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
      />
      <textarea className={classes.textarea} {...register("message")} placeholder="Message" />
      <input  type="submit" className={classes.submit} />
      </Slide>
    </form>
   
    </div>
    
  );
}

export default Form;
