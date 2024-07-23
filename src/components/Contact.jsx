import React from "react";
//import { Form } from "react-router-dom";



const Contact = () => {
  return (
    <div className="bg-amber-100">
      <div className="justify-evenly flex flex-col items-center h-96">
        <h1 className="text-lg font-bold p-2">Contact Me</h1>
        <div className="items-center">
          <div>Name:</div>
            <input type="text" id="name" name="name" className="" />
          </div>
        <div className="items-center">
          <div className="items-center">Email:</div>
            <input type="text" id="email" name="email" className="" />
          </div>
        <div className="items-center">
          <div>Message:</div>
            <input type="text" id="Message" name="Message" className="" />
          </div>
      </div>
    </div>
  );
};

export default Contact;