import React, { useState } from "react";
//import { Form } from "react-router-dom";



const Contact = () => {

  const [emailForm, setEmailForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  //const [result, setResult] = useState(null);

  const [status, setStatus] = useState("Submit");

  function resetEmailForm() {
    setEmailForm({ name: '', email: '', message: '' });
  }

  const handleChange = async (e) => {
    setEmailForm({ ...emailForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    if(status === "Sending...") return;

    if(!emailForm.name || !emailForm.email || !emailForm.message) {
      //setResult({ error: "Please fill out all fields" });
      return;
    }

    e.preventDefault();
    setStatus("Sending...");
    const res = await fetch("/.netlify/functions/emailServer", {
      method: "POST",
      body: JSON.stringify(emailForm),
    });
    const result = await res.json();
    console.log(result);
    //setResult(result);
    setStatus("Submit");
    resetEmailForm();
  };

  return (
    <div className="bg-white lg:flex lg:justify-center">
      <div className="justify-evenly flex flex-col items-center h-96 bg-blue-300 rounded-lg mx-6 my-4 lg:w-1/3">
        <h1 className="text-lg font-bold p-2">Contact Me</h1>
        <div className="items-center w-full px-8">
          <div>Name:</div>
          <input onChange={handleChange} value={emailForm.name} type="text" id="name" name="name" placeholder="Your name..." className="bg-white border border-gray-300 shadow-inner w-full" />
        </div>
        <div className="items-center w-full px-8">
          <div>Email:</div>
          <input onChange={handleChange} value={emailForm.email} type="text" id="email" name="email" placeholder="example@example.com" className="shadow-inner bg-white border border-gray-300 w-full" />
        </div>
        <div className="items-center w-full px-8">
          <div>Message:</div>
          <textarea onChange={handleChange} value={emailForm.message} type="text" id="message" rows="5" name="message" placeholder="Your message..." className="shadow-inner resize-none bg-white border border-gray-300 w-full" />
        </div>
        <button className="bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded" id="submitButton" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Contact;