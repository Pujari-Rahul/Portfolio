import "./FormStyles.css";
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
const Form = () => {
  const form =useRef();
  const sendEmail=(e) =>{
    e.preventDefault();
    alert("data submitted");
    emailjs.sendForm('service_5bw2yi7', 'template_6jsdvyi',form.current,'MX0ZcGGvlGgqIjSp3') 
    .then((result)=>{
      console.log(result.text);

    },(error)=>{
      console.log(error.text);
    });
  };
  return (
    <div className="form">
        <form ref={form} onSubmit={sendEmail}>
            <label>Your Name</label>
            <input type="text" name="from_name"></input>
            <label>Email</label>
            <input type="email" name="from_email"></input>
            <label>Subject</label>
            <input type="text" name="from_subject"></input>
            <label>Message</label>
           <textarea rows="6" placeholder="Type your message here" name="message"/>
           <button className="btn">Submit</button>

        </form>
      
    </div>
  )
}

export default Form
