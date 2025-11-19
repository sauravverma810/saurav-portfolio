import "../Css/About.css";
import working1 from "../images/working.png";
import Working2 from "../images/working1.png";

function About() {
  return (
    <>
      <div className="aboutpage">
        <div className="about-firstsection">
          <div className="about-leftsection">
            <h3 className="know-who">
              Know Who <span className="i-m"> I'M</span>
            </h3>

            <div className="aboutme">
              Hi Everyone, I am <span className="name">Saurav Verma, </span>
              a driven individual with a clear vision for my future. 
              Currently pursuing my Bachelor of Technology (B.Tech), 
              I am deeply passionate about full-stack development and 
              data analysis. With a strong interest in both front-end 
              and back-end technologies, I am dedicated to problem solving. 
              My ambition extends beyond technical proficiency—I aim to 
              leverage data analytics to derive meaningful insights and 
              drive informed decision-making.
            </div>
          </div>

          <div className="about-rightsection">
            <img src={working1} alt="working" />
          </div>
        </div>

        <h3 className="education">
          Educ<span className="action">ation</span>
        </h3>

        <div className="about-secondsection">
          <div className="about-secleftsection">

            {/* B.Tech CSE - Shivalik */}
            <h3 className="shivalikcollege">Shivalik College of Engineering, Dehradun</h3>
            <div className="sigmainfo">
              I am currently pursuing a Bachelor of Technology (B.Tech) in 
              Computer Science and Engineering at Shivalik College of 
              Engineering, Dehradun, which is affiliated with Uttarakhand 
              Technical University (UTU). I am in my 2nd year and currently 
              in the 3rd semester. My coursework is helping me build strong 
              fundamentals in programming, data structures, algorithms, and 
              core computer science concepts. The university’s structured 
              curriculum and the college’s hands-on learning environment 
              are enhancing my technical knowledge and problem-solving skills.
            </div>

            {/* 12th Standard */}
            <h3 className="school">Upgraded High School Bhatta</h3>
            <div className="schoolinfo">
              I completed my 12th Standard in the Science stream with PCM 
              (Physics, Chemistry, Mathematics) from Upgraded High School 
              Bhatta, located in Roh, Nawada, Bihar, in 2024. My higher 
              secondary education strengthened my analytical thinking and 
              problem-solving abilities, especially in Physics and Mathematics. 
              This phase played a key role in shaping my academic direction 
              and preparing me for further studies in Information Technology.
            </div>

            {/* 10th Standard */}
            <h3 className="school">Upgraded High School Bhatta</h3>
            <div className="schoolinfo">
              I attended Upgraded High School Bhatta from Kindergarten through 
              10th Standard, located in Roh, Nawada, Bihar. During my time 
              there, I built a strong academic foundation and developed a 
              deep curiosity toward learning. The supportive and disciplined 
              environment helped shape my confidence and overall personality.
            </div>

          </div>

          <div className="about-secrightsection">
            <img src={Working2} alt="working2" />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
