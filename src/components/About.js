import React from "react";
import "../styles/About.css";
// import profileImage from "../img/loyola.svg";


const About = () => {
  return (
    <div className="about">
      <p className="subtitle">
        Hi, I am a software developer based in Portland, OR.
        <br />
        <br />
        Returning to the Pacific Northwest after recieving a B.S. degree from Loyola University Chicago, *TO DO*
        With experience in applied projects and research, I seek to leverage emerging technologies to drive impactful solutions.
        <br />
        <br />
        Specializing in web development and UI design.
        I focus on building reliable and user-centric applications.

      </p>
      Interests:
      <ul>
        <li> Accessible Web Design</li>
        <li> Software Architecture</li>
        <li> Machine Learning</li>
      </ul>
      <br/>
    </div>
  );
};

export default About;
