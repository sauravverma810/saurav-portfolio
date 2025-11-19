import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import "../Css/Project.css";

const projects = [
  {
    id: 1,
    name: "A simple and responsive calculator ",
    image: require("../images/Wecare.jpeg"),
    info: "A simple and responsive calculator web app built using HTML, CSS, and JavaScript. It performs basic arithmetic operations like addition, subtraction, and multiplication with a clean and user-friendly interface. The app is lightweight, easy to use, and works seamlessly across devices and screen sizes.",
    link: "https://caculator-five.vercel.app/",
    github: "https://github.com/sauravverma810/caculator",
  },
  {
    id: 2,
    name: "playing cards",
    image: require("../images/blog.png"),
    info: "Developed a dynamic A simple and clean Playing Card UI built using only HTML and CSS. This project displays beautiful, responsive playing cards with smooth design, shadows, and proper suits. Great for practicing front-end styling and layout techniques.",
    link: "https://github.com/sauravverma810",
    github: "https://github.com/sauravverma810/Playing-Card",
  },
  // {
  //   id: 3,
  //   name: "Universal Translator",
  //   image: require("../images/RTT.png"),
  //   info: "Developed the Universal Translator application using Android Studio and Java, with Google ML Kit integrated for real-time translation of ongoing conversations. This innovative application provides instant translations, enhancing communication across different languages without the need for manual intervention. The automated speak-and-response mechanism ensures seamless interaction, setting it apart from other translation tools by delivering immediate and efficient language support.",
  //   link: "https://insta",
  //   github: "",
  // },
  // {
  //   id: 4,
  //   name: "Chat Application",
  //   image: require("../images/chat.png"),
  //   info: "I’m thrilled to share my latest project a dynamic and interactive chat application that allows real-time messaging between users using WebSockets. For this project, I utilized HTML, CSS, JavaScript, Node.js, Express, and Socket.io. This application showcases my ability to create seamless, real-time communication features, demonstrating my proficiency in both front-end and back-end development.",
  //   link: "https://insta",
  //   github: "",
  // },
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
              <a href={project.link}>
                Visit <FaExternalLinkAlt />
              </a>
            </button>
            <button className="visitsitelink">
              <a href={project.github}>
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
