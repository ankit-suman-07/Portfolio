import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../styles/ProjectDemo.css";

// Redirect Page
const ProjectDemo = () => {
    const location = useLocation();
  const url = location.state.url;
    useEffect(() => {
      window.location.replace(url);
    }, [])
  
    // Render some text when redirecting
    // You can use a loading gif or something like that
    return (
        <div className="empty" > 
            <div className="loader" >

            </div>
        </div>
    );
    
    
  }

  export default ProjectDemo;