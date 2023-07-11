import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import "../styles/FeaturedCard.css";

function ProjectItem({ image, name, id, url, featured, skills, desc }) {
    const navigate = useNavigate();

    
  
  const handleItemClick = () => {
    navigate("/projectdemo/", { state: { url } });
  };
  return (
    <div className='card' onClick={handleItemClick} >
        <h3> { name } </h3>
        <div className='card-image'>
            <img src={image} alt={ name } />
        </div>
        <div className='tools'>
            { skills.map( (skill) => (
                <img src= {skill}  alt={ skill } className='tool-icon' />
            )
            ) }
        </div>
        <div className='description' >
          <p> {desc} </p>
        </div>
        <div>
          <button className='demo-btn' >Demo</button>
        </div>
    </div>
  )
}

export default ProjectItem;