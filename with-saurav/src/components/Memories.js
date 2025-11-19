import React from "react";
import ReactPlayer from "react-player";
import "../Css/Memories.css";
import T20wc from "../video/T20wc.mp4";
import T20wc1 from "../video/T20wc1.mp4";
import BatchIT from "../images/group2025.jpg";
import OldFriendsPhoto from "../images/IMG_2025.jpg";
import TravelPhoto1 from "../images/me1.jpeg";
import TravelPhoto2 from "../images/me 2.jpg";
import TravelPhoto3 from "../images/flower.jpg";
import TravelPhoto4 from "../images/saurav.jpg";
import Teamindia from "../images/teamindia.png";
import Group from "../images/friendsclg.jpg";
import TravelPhoto5 from "../images/IITG1.jpg";

const MemoriesAndFriends = () => {
  return (
    <div className="memories-friends-section">
      {/* <div className="memories-section">
        <h1 className="title">
          <span className="orange">Moments</span>
          <span className="white"> of</span>
          <span className="green"> July</span>
        </h1>
        <div className="content-container">
          <div className="video-container">
            <div className="video-wrapper top-video">
              <ReactPlayer
                url={T20wc1}
                playing
                muted
                width="100%"
                height="100%"
              />
            </div>
            <div className="video-wrapper bottom-video">
              <ReactPlayer
                url={T20wc}
                playing
                muted
                width="100%"
                height="100%"
              />
            </div>
          </div>
          <div className="text-container">
            <p>
              <span className="orange">"Thanks for</span>
              <span className="white"> bringing the cup</span>
              <span className="green"> back home"</span>
            </p>
            <span className="credit-indian">
              Credits: Video from{" "}
              <a
                href="https://www.instagram.com/indiancricketteam/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Indian Cricket Team
              </a>{" "}
              on Instagram.
            </span>
          </div>
        </div>
        <div className="india-content-container">
          <div className="india-text-container">
            <p>
              "If you know Team India just won the T20 World Cup recently, then
              you understand the sheer joy and pride that swept through the
              nation. That night felt like a mini Diwali, with fireworks
              lighting up the sky and celebrations erupting in every corner.
              Everyone's eyes were filled with tears of joy and happiness, as
              the triumph brought together millions of hearts, united in their
              love for cricket and their country. The victory was not just a
              sporting achievement but a moment of collective euphoria and
              national pride."
              <br />
              <span className="credit-indian">
                Credits: Image from{" "}
                <a
                  href="https://www.instagram.com/indiancricketteam/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Indian Cricket Team
                </a>{" "}
                on Instagram.
              </span>
            </p>
          </div>
          <div className="india-photo-container">
            <img src={Teamindia} alt="teamindia" className="friend-photo" />
          </div>
        </div>
      </div> */}

      <div className="friends-section">
        <h1 className="friends-title">
          <span className="f">F</span>
          <span className="r">R</span>
          <span className="i">I</span>
          <span className="e">E</span>
          <span className="n">N</span>
          <span className="d">D</span>
          <span className="s">S</span>
        </h1>

        <div className="friends-content-container">
          <div className="friends-photo-container">
            <img
              src={OldFriendsPhoto}
              alt="Old Friends"
              className="friend-photo"
            />
          </div>
          <div className="friends-text-container">
            <p>
              "We are three friends known as Rohit, Kohli, Dhoni and we also
              call ourselves the three Musketeers: one for all, all for one."
            </p>
          </div>
        </div>

        <div className="friends-content-container">
          <div className="friends-text-container">
            <p>
              "College friends: the ones who laughed with us, cried with us, and
              made every moment unforgettable."
            </p>
          </div>
          <div className="friends-photo-container">
            <img src={Group} alt="Old Friends" className="friend-photo" />
          </div>
        </div>

        <div className="friends-content-container">
          <div className="friends-photo-container">
            <img src={BatchIT} alt="Old Friends" className="friend-photo" />
          </div>
          <div className="friends-text-container">
            <p>
              "B-tech Batch of 2024-2028  Four years of learning, growth, and
              unforgettable memories. Together, we've navigated challenges,
              celebrated milestones, and created bonds that will last beyond
              these walls."
            </p>
          </div>
        </div>
      </div>

      <div className="travel-section">
        <h1 className="travel-title">
          <span className="orange">Travel</span>
          <span className="white"> Memories</span>
        </h1>

        <div className="travel-content-container">
          <div className="travel-text-container">
            <p>
              "A visit to the Statue of Unity under a cloudy sky, with light
              rain adding a touch of magic to our adventure."
            </p>
            <p className="travel-details">
              <strong>Destination:</strong> Koti, Dehradun, India
              <br />
              <strong>Date:</strong> June 20, 2025
            </p>
          </div>
          <div className="travel-photo-container">
            {/* <img
              src={TravelPhoto1}
              alt="Statue of Unity"
              className="travel-photo"
            /> */}
            <img src={TravelPhoto2} alt="Cloudy Sky" className="travel-photo" />
          </div>
        </div>

        <div className="travel-content-container">
          <div className="travel-photo-container">
            <img
              src={TravelPhoto3}
              alt="Beautiful Flower"
              className="travel-photo"
            />
          </div>
          <div className="travel-text-container">
            <p>
              “A beautiful flower captured at the Sakri River during a visit with old school friends.”
            </p>
            <p className="travel-details">
              <strong>Destination:</strong> Nawada, Bihar, India
              <br />
              <strong>Date:</strong> November 7, 2024
            </p>
          </div>
        </div>
        <div className="travel-content-container">
          <div className="travel-text-container">
            <p>"Visited GNA University For Hackathon."</p>
            <p className="travel-details">
              <strong>Destination:</strong> GNA University, located in Phagwara, Punjab, India
              <br />
              <strong>Date:</strong> March 29, 2025
            </p>
          </div>
          <div className="travel-photo-container">
            <img
              src={TravelPhoto5}
              alt="Cloudy Sky"
              className="travel-photo-iit"
            />
          </div>
        </div>
        <div className="travel-content-container">
          <div className="travel-photo-container">
            <img
              src={TravelPhoto4}
              alt="Beautiful Flower"
              className="travel-photo"
            />
          </div>
          <div className="travel-text-container">
            <p>
              "Visited Forest Research Institute  with Friends"
            </p>
            <p className="travel-details">
              <strong>Destination:</strong> Dehradun Mussorie, Uttrakhand, India
              <br />
              <strong>Date:</strong> August 12, 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemoriesAndFriends;
