import Proj1 from "../assets/proj1.jpg";
import Proj2 from "../assets/proj2.jpg";
import Proj3 from "../assets/proj3.jpg";

import GitHubIcon from "@material-ui/icons/GitHub";
export const ProjectList = [
  {
    name: "E-Vaccination Management System",
    image: Proj1,
    skills: "TypeScript,HTML,CSS, Angular, Sql, Php, Apache server  ",
    Link: 
        <div>
          <a href={"https://github.com/likhithaavvari/E-vaccination-System"}> <GitHubIcon /></a>
        </div>,
  },
  {
    name: "Airline Reservation Management System",
    image: Proj2,
    skills: "HTML, CSS, JS, Java, JDBC, Servlets, MySql",
    Link:
    <div>
    <a href={"https://github.com/likhithaavvari/Airline-Reservation-Managment-System"}> <GitHubIcon /></a>
    </div>,
  },
  {
    name: "Malicious Urls Detection",
    image: Proj3,
    skills: "Used linear regression and Multinomial naive bayes algorithm, kaggle dataset",
    Link:
    <div>
       <a href={"https://github.com/likhithaavvari/Malicious-url-detection"}> <GitHubIcon /></a>
    </div>,
  },
  
];

