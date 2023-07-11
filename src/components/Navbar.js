import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";
import { Link, useLocation } from "react-router-dom";
import ReorderIcon from '@mui/icons-material/Reorder';
import Image from "../assets/profile.png";

function Navbar() {

  const [expandNavbar, setExpandNavbar] = useState(false);

    const location = useLocation();
    useEffect(() => {
        setExpandNavbar(false);
    }, [location]);

  return (
    <div className="nav" id= {expandNavbar ? "open" : "close"} >
        <div className="logo">
            <img src={Image} alt="Profile Photo" className="image" />
        </div>

        <div className="toggleButton">
            <button 
                onClick={ () => {
                    setExpandNavbar((prev) => !prev)
                } } 
            >
                <ReorderIcon className="re-icon" />
            </button>
        </div>

        <div className="link-list">
            <Link to="/"  className="links" >Home</Link>
            <Link to="/skills"  className="links"  >Skills</Link>
            <Link to="/projects"  className="links" >Projects</Link>
            <Link to="/blog"  className="links" >Blog</Link>
            
            <button className="contact-btn" >
                <Link to="/contact"  className="links" >Contact Me</Link>
            </button>
        </div>
    </div>
  )
}

export default Navbar;