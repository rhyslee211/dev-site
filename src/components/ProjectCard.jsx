import React from "react";
import { BiUnderline } from "react-icons/bi";


const ProjectCard = ({ project }) => {

    const openWebsite = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

  return (
    <div className="bg-gray-300 rounded-md h-96 w-5/6 border-2 border-gray-500 my-2 lg:w-80" >
        <div className="flex flex-col h-full w-full items-center justify-center">
            <div className="w-full">
                <img className="object-cover h-20 w-full rounded-md border-2 border-gray-500" src={project.image}></img>
            </div>
            <div className="font-bold text-xl m-1">
                {project.name}
            </div>
            <div className="text-center m-auto">
                {project.description}
            </div>
            <div className="flex flex-row mt-auto rounded-md justify-between w-full h-12">
                {project.githubUrl !== null && project.githubUrl !== undefined && <div className="w-full border-2 border-gray-500">
                    <button className="text-center h-full w-full" onClick={() => openWebsite(project.githubUrl)}>Github</button>
                </div>}
                {project.demoUrl !== null && project.demoUrl !== undefined && <div className="w-full border-2 border-gray-500">
                    <button className="text-center h-full w-full" onClick={() => openWebsite(project.demoUrl)}>Demo</button>
                </div>}
            </div>
        </div>
    </div>
    );
}


export default ProjectCard;