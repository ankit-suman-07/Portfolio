import React from 'react';
import ProjectItem from '../components/ProjectItem';
import { ProjectList } from '../helper/ProjectList';
import "../styles/Projects.css";

function Projects() {
  
  return (
    <>
    <div className='h2'>My Personal Projects</div>
    <div className='all-projects' >
    {ProjectList.map((project, idx) => {
          return (
            <ProjectItem id={idx} name={project.name} image={project.image} url={project.url} featured={project.featured} skills={project.skills} desc={project.description} />
          );
        })}
    </div>
    </>
  )
}

export default Projects;