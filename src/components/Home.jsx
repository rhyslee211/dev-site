import React from "react";
import profileImage from "../assets/rhys-profile.jpg"; // Adjust the path as necessary
import { AiFillGithub, AiOutlineLinkedin } from "react-icons/ai";

const Home = () => {
    return (
        <div className="bg-white">
            <div className="flex flex-col items-center justify-center h-screen lg:flex-row-reverse lg:justify-evenly">
                <img src={profileImage} alt="Rhys Lee" className="mb-28 rounded-full h-48 w-48 lg:h-80 lg:w-80 lg:m-0" />
                <div className="items-center justify-center">
                    <h1 className="text-7xl font-bold">Rhys Lee</h1>
                    <p className="text-3xl mb-10 mt-1">Software Engineer</p>
                    <div className="flex flex-row justify-center lg:pt-10">
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.github.com/rhyslee211"
                            className="w-25 mr-6"
                        >
                        <AiFillGithub size={100} className="text-black" />
                        </a>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.linkedin.com/in/rhys-lee/"
                            className="w-25"
                        >
                        <AiOutlineLinkedin size={100} className="text-black" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
)};

export default Home;