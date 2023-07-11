import React from "react";
import Skills from "./Skills";
import Featured from "./Featured";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import DownloadIcon from '@mui/icons-material/Download';
import "../styles/Home.css";
import Image from "../assets/profile.png";

function Home() {
  const openPDF = () => {
    const pdfUrl = process.env.PUBLIC_URL + "/pdf/Resume - Ankit Suman.pdf";
    window.open(pdfUrl);
  };
  
  return (
    <>
    <div className="home">
      <div className="imageDiv-top" >
        <img src={Image} alt="Profile Photo" className="image" />
      </div>
      <div className="hero">
        <div className="greeting banner" >
            Hi! I'm <span>Ankit Suman</span> 
        </div>
        <div className="tagline heading" >
            A passionate Web Developer & Designer.
        </div>
        <div className="description" >
        interested in learning more about how computers work, and I have been working on my own projects that combine coding and art. My current project is a fun little game where you play as a cat who can jump up walls. It’s done in HTML5, JavaScript, CSS3, and Python and runs in any browser you can access.
        </div>
        <div className="interact" >
          <button className="resume"  onClick={openPDF} >
            Resume <DownloadIcon />
          </button>
          <div className="socials" >
            <a href="https://www.linkedin.com/in/ankit-suman-6925011b6/"><LinkedInIcon /></a>
            <a href="https://github.com/ankit-suman-07"><GithubIcon /></a>
            <a href="https://www.instagram.com/ankit__suman_/"><InstagramIcon /></a>
            <a href="mailto:ankitsuman07@gmail.com?subject=Inquiry%20from%20Website&body=Hello,%20I%20have%20a%20question%20for%20you.[Please%20update%20the%20mail%20IDs]"><EmailIcon /></a>
          </div>
        </div>
        
      </div>
      
      <div className="imageDiv" >
        <img src={Image} alt="Profile Photo" className="image" />
      </div>

      
    </div>
    <Skills /> 
    <Featured /> 
    </>
  );
}

export default Home;
