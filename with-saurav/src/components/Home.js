import React, { useEffect } from "react";
import { FaExternalLinkAlt, FaStar, FaRocket, FaPlus } from "react-icons/fa";
import "../Css/Home.css";

import htmlLogo from "../images/html.png";
import cssLogo from "../images/css.png";
import jsLogo from "../images/js.png";
import reactLogo from "../images/react.png";
import nodelogo from "../images/nodejs.png";
import pythonlogo from "../images/python.png";
import gitlogo from "../images/git.png";
import mongologo from "../images/mongo.png";

import image1 from "../images/img.png";   // first section image
import image2 from "../images/img2.png";  // second section image

function Home() {
  useEffect(() => {
    const thirdSection = document.querySelector(".thirdsection");
    for (let i = 0; i < 20; i++) {
      const meteor = document.createElement("div");
      meteor.classList.add("meteor");
      meteor.style.top = `${Math.random() * 100}vh`;
      meteor.style.left = `${Math.random() * 100}vw`;
      meteor.style.animationDelay = `${Math.random() * 5}s`;
      meteor.style.animationDuration = `${Math.random() * 3 + 2}s`;
      thirdSection.appendChild(meteor);
    }

    const words = document.querySelectorAll(".word");
    words.forEach((word, index) => {
      word.style.animationDelay = `${index * 0.5}s`;
    });
  }, []);

  const splitText = (text) => {
    return text.split(" ").map((word, index) => (
      <span key={index} className="word">
        {word}&nbsp;
      </span>
    ));
  };

  return (
    <>
      {/* ================= FIRST SECTION ================= */}
      <section className="firstsection">
        <div className="home-background-icon home-star-icon">
          <FaStar />
        </div>

        <div className="leftsection">
          <h2 className="lefthello">
            {splitText("Hello,")} <span className="wave">👋</span>
          </h2>

          <h2 className="leftsaurav">
            {splitText("i'm")}
            <span className="Sauravcolor">{splitText("Saurav")}</span>
            {splitText("Verma")}
          </h2>

          <h1 className="webcolor">{splitText("Full Stack Developer")}</h1>
        </div>

        <div className="rightsection">
          <img src={image1} alt="first section" />
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <h1 className="centered-text">
        <div className="home-background-icon home-plus-icon">
          <FaPlus />
        </div>
        {splitText("LET ME")}{" "}
        <span className="introcolor">{splitText("INTRODUCE MYSELF")}</span>
      </h1>

      {/* ================= SECOND SECTION ================= */}
      <section className="secondsection">
        <div className="secondleftsection">
          <p>
            Hi there! I'm Saurav Verma, a second-year B-tech student with a passion for{" "}
            <span className="paragraph">
              full-stack development, UI/UX design, and data analysis.
            </span>{" "}
            I love creating seamless experiences from front-end to back-end,
            focusing on both functionality and aesthetics. Always eager to learn
            and adapt.
          </p>

          <button className="home_visitsitelink">
            <a
              href="https://drive.google.com/file/d/16WwGabAi9qOGfdO-FhOrQ2rYEOHxHQEE/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
            >
              <b>
                Download Resume <FaExternalLinkAlt />
              </b>
            </a>
          </button>
        </div>

        <div className="secondrightsection">
          <img src={image2} alt="second section" />
        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <h1 className="centered-text">
        <div className="home-background-icon home-rocket-icon">
          <FaRocket />
        </div>
        <span className="introcolor">{splitText("Professional")}</span>{" "}
        {splitText("Skillset")}
      </h1>

      <section className="thirdsection">
        <div className="container">
          {[
            { logo: htmlLogo, name: "HTML" },
            { logo: cssLogo, name: "CSS" },
            { logo: jsLogo, name: "JavaScript" },
            { logo: reactLogo, name: "React" },
            { logo: nodelogo, name: "NodeJS" },
            { logo: pythonlogo, name: "Python" },
            { logo: gitlogo, name: "Git" },
            { logo: mongologo, name: "MongoDB" },
          ].map((tech, index) => (
            <div className="card" key={index}>
              <div className="card-content">
                <img src={tech.logo} alt={tech.name} />
                <p>{tech.name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
