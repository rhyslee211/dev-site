import React from "react";


const ProjectCard = ({ project }) => {

    const openWebsite = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

  return (
    <div className="bg-gray-300 rounded-md h-96 w-5/6 border-1 border-black my-2 shadow-lg shadow-black lg:w-80" >
        <div className="flex flex-col h-full w-full items-center justify-center">
            <div className="w-full">
                <img className="object-cover h-20 w-full rounded border-b-2 border-gray-500" alt="hardcoded default for now" src={project.image}></img>
            </div>
            <div className="font-bold text-xl m-1">
                {project.name}
            </div>
            <div className="text-center m-auto px-2">
                {project.description}
            </div>
            <div className="flex flex-row mt-auto rounded-md justify-between w-full h-12">
                {project.githubUrl !== null && project.githubUrl !== undefined && <div className={`w-full border-t-2 border-gray-500 ${project.demoUrl !== null && project.demoUrl !== undefined ? 'border-r-2' : 'border-r-none'}`}>
                    <button className="text-center h-full w-full" onClick={() => openWebsite(project.githubUrl)}>Code</button>
                </div>}
                {project.demoUrl !== null && project.demoUrl !== undefined && <div className="w-full border-t-2 border-gray-500">
                    <button className="text-center h-full w-full" onClick={() => openWebsite(project.demoUrl)}>Demo</button>
                </div>}
            </div>
        </div>
    </div>
    );
}


export default ProjectCard;