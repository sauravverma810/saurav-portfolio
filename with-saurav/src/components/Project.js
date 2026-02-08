import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import "../Css/Project.css";

const projects = [
  {
    id: 1,
    name: "Personal Portfolio Website",
    image: require("../images/portfolio.png"),
    info: "A personal and responsive portfolio website built using React.js. It includes multiple sections such as Home, About, Projects, Experience, Achievements, Memories, and Contact to showcase my skills, work, and personal journey. The portfolio features a clean UI, reusable components, and smooth performance across all devices and screen sizes.",
    link: "https://saurav-portfolio-lime.vercel.app/",
    github: "https://github.com/sauravverma810/saurav-portfolio",
  },
  {
    id: 2,
    name: "A simple and responsive calculator",
    image: require("../images/calculator.jpeg"),
    info: "A simple and responsive calculator web app built using HTML, CSS, and JavaScript. It performs basic arithmetic operations like addition, subtraction, and multiplication with a clean and user-friendly interface. The app is lightweight, easy to use, and works seamlessly across devices and screen sizes.",
    link: "https://caculator-five.vercel.app/",
    github: "https://github.com/sauravverma810/caculator",
  },
  {
    id: 3,
    name: "Image Gallery",
    image: require("../images/Gallery1.png"),
    info: "This project is a fully responsive image gallery web application developed as part of my CodeAlpha Frontend Development Internship. It features category-based filtering, live search, animated image cards, and an interactive lightbox with navigation and download functionality. The UI is designed with a modern layout, smooth animations, and optimized performance for all screen sizes.",
    link: "https://image-gallery-gamma-liart.vercel.app/",
    github: "https://github.com/sauravverma810/Task1-image-gallery",
  },
  {
    id: 4,
    name: "Playing Cards UI",
    image: require("../images/playing.png"),
    info: "A simple and clean Playing Card UI built using only HTML and CSS. This project displays responsive playing cards with smooth design, shadows, and proper suits. It is ideal for practicing front-end styling and layout techniques.",
    link: "https://github.com/sauravverma810/Playing-Card",
    github: "https://github.com/sauravverma810/Playing-Card",
  },
];

function Project() {
  return (
    <div className="Projectsection">
      {projects.map((project) => (
        <div className="projectcard" key={project.id}>
          <div className="projectimage">
            <img src={project.image} alt={project.name} />
          </div>

          <div className="projectinfo">
            <h3>{project.name}</h3>
            <p>{project.info}</p>
          </div>

          <div className="buttonssection">
            <button className="visitsitelink">
              <a href={project.link} target="_blank" rel="noreferrer">
                Visit <FaExternalLinkAlt />
              </a>
            </button>

            <button className="visitsitelink">
              <a href={project.github} target="_blank" rel="noreferrer">
                GitHub <FaExternalLinkAlt />
              </a>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Project;
