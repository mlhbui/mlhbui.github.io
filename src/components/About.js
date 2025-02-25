import React from "react";
import "../styles/About.css";
import profileImage from "../img/profile.png"; // Import the image
// import Image from 'next/image';

const About = () => {
  return (
    <div className="about">
      <p className="subtitle">
        Hi, I am a software developer currently located in Portland, OR.
        <br />
        <br />
        I am an advocate for accessible design and a curated user experience.
        I believe the intersection between technology and design is important to creating
        reliable and engaging software.
      </p>
      Interests:
      <ul>
        <li> Accessible Web Design</li>
        <li> Software Architecture</li>
        <li> Machine Learning</li>
      </ul>
      <h2>Education</h2>
      <div className="education">
        <div className="logo">
    {/*      <Image src={profileImage} alt="profile photo" width={50} height={50} />*/}
        </div>
        <div className="univ">
          <h3> Loyola University Chicago </h3>
          <p> Software Engineering, Bachelor of Science </p>
          <p> Minors and concentration in: </p>
          <ul>
            <li>Information Systems</li>
            <li>Computer Crime & Forensics</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
