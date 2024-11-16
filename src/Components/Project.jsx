import React from 'react';
import FigmaImage from "../Assets/Figma.png";
import FrontEndImage from "../Assets/FrontEnd.png";

const Project = () => {
  return (
    <section id="Project" className="h-screen flex flex-col justify-center bg-red-900 items-center">
      <div className="border-image-container flex items-center space-x-4 mb-6">
        <img src={FigmaImage} className='w-64' alt="Figma Project" />
        <p className='text-left'>UI/UX is one of the projects that I carried out in semester 1.
        <br/>This project aims to find out how to create a simple portfolio using Figma</p>
        <img src={FrontEndImage} className='w-64' alt="Front End Project" />
        <p className='text-left'>Front end is one of the projects that I carried out in semester 1.
        <br/>This project aims to find out how to create a simple portfolio using visual code</p>
      </div>
    </section>
  );
};

export default Project;
