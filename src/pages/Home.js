import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, I'm Avvari Likhitha</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <p> Mail: likhitha.avvari@gmail.com </p>
          <a href="https://www.linkedin.com/in/likhitha-avvari-914a491b0/"><LinkedInIcon /></a>   
          <a href="https://github.com/likhithaavvari"><GithubIcon/></a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
        <li className="item">
            <h2> Programming Languages</h2>
            <span>
               C, Python, Sql
            </span>
          </li>
          <li className="item">
            <h2> Web-development</h2>
            <span>
            JavaScript, HTML, CSS, PHP
            </span>
          </li>

          <li className="item">
            <h2> Cloud Computing</h2>
            <span>
            AWS Cloud Practitioner Essentials, AZURE fundamentals, OCI foundations, OCI Architecture
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
