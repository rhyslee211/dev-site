import React from "react";
import { Form } from "react-router-dom";



const Contact = () => {
  return (
    <div className="bg-amber-100">
      <div className="">
        <h1>Contact Me</h1>
        Name:<br />
        <input type="text" id="name" name="name" className="" />
        <br />
        Email:<br />
        <input type="text" id="email" name="email" className="" />
        <br />
        Message:<br />
        <input type="text" id="message" name="message" className="" />
      </div>
    </div>
  );
};

export default Contact;