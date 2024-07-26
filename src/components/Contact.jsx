import React from "react";
//import { Form } from "react-router-dom";



const Contact = () => {
  return (
    <div className="bg-white lg:flex lg:justify-center">
      <div className="justify-evenly flex flex-col items-center h-96 bg-blue-300 rounded-lg mx-6 my-4 lg:w-1/3">
        <h1 className="text-lg font-bold p-2">Contact Me</h1>
        <div className="items-center w-full px-8">
          <div>Name:</div>
          <input type="text" id="name" name="name" placeholder="Your name..." className="bg-white border border-gray-300 shadow-inner w-full" />
        </div>
        <div className="items-center w-full px-8">
          <div>Email:</div>
          <input type="text" id="email" name="email" placeholder="example@example.com" className="shadow-inner bg-white border border-gray-300 w-full" />
        </div>
        <div className="items-center w-full px-8">
          <div>Message:</div>
          <textarea type="text" id="Message" rows="5" name="Message" placeholder="Your message..." className="shadow-inner resize-none bg-white border border-gray-300 w-full" />
        </div>
        <button className="bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded" id="submitButton">Submit</button>
      </div>
    </div>
  );
};

export default Contact;