import React from 'react';
import FeaturedCard from './FeaturedCard';
import { ProjectList } from '../helper/ProjectList';
import { Link } from "react-router-dom";
import "../styles/Featured.css";

function Featured() {
  
  return (
    <>
    <div className='h2'>Featured Projects</div>
    <div className='featured' >
    {ProjectList.map((project, idx) => {
      if (project.featured)
          return (
            <FeaturedCard id={idx} name={project.name} image={project.image} url={project.url} featured={project.featured} skills={project.skills} desc={project.description} />
          );
        })}
    </div>
    <Link to="/projects"  className="links" >
        <button className='all-btn' >
            Go to All Projects...
        </button>
    </Link>
    
    </>
  )
}

export default Featured