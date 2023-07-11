import React from 'react';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import "../styles/Footer.css";

function Footer() {
  return (
    <>
    <footer>
        <div className="socialMedia" >
            <a href="https://www.linkedin.com/in/ankit-suman-6925011b6/"><LinkedInIcon  className='icons'  /></a>
            <a href="https://github.com/ankit-suman-07"><GithubIcon  className='icons'  /></a>
            <a href="https://www.instagram.com/ankit__suman_/"><InstagramIcon  className='icons'  /></a>
            <a href="mailto:ankitsuman07@gmail.com?subject=Inquiry%20from%20Website&body=Hello,%20I%20have%20a%20question%20for%20you.[Please%20update%20the%20mail%20IDs]"><EmailIcon  className='icons'  /></a>
          </div>
    </footer>
    </>
  )
}

export default Footer;