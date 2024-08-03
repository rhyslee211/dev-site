import React from "react";
import ProjectCard from "./ProjectCard";
import DevSiteImg from "../assets/devSiteImg.png";
import BubblImg from "../assets/bubblImg.png";

const Projects = () => {
  return (
    <div className="bg-white">
      <div className="flex flex-col items-center w-full h-fit justify-center items-center">
        <div className="flex text-5xl font-bold">Projects</div>
        <div className="grid grid-cols-1 h-fit mt-6 mb-2 gap-8 place-items-center lg:grid-cols-2 lg:gap-x-16">
          <ProjectCard project={{ name: "Portfolio Site", description: "Portfolio website made using React and TailwindCSS. I started this project because I wanted to learn React and because I also wanted to learn design principles. It's still a work in progress as I continue to improve and grow, and I hope it grows with me.", image: DevSiteImg, githubUrl: "https://github.com/rhyslee211/dev-site", demoUrl: "https://www.rhyslee.dev" }} />
          <ProjectCard project={{ name: "Bubbl", description: "Bubbl is a task management app created using Java and Android Studio. I worked with a team to create an application that would automatically sort tasks using an algorithm that factored in time, location, and a user set priority level, to help users more easily manage tasks.", image: BubblImg, githubUrl: "https://github.com/rhyslee211/BubblAndroid" }} />
        </div>
      </div>
    </div>

)};

export default Projects;