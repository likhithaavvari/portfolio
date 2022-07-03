import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
      <a href="https://www.instagram.com/_.likhithaaa._/"><InstagramIcon /></a> 
      <a href="https://twitter.com/Likhithaaa14"> <TwitterIcon /></a> 
      <a href="https://www.facebook.com/likhitha.avvari"><FacebookIcon /></a> 
        <a href="https://www.linkedin.com/in/likhitha-avvari-914a491b0/"><LinkedInIcon /></a>
      </div>
    </div>
  );
}

export default Footer;
