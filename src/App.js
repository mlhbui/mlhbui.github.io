import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Header from "./components/Header.js";
import About from "./components/About.js";
import SocialLinks from "./components/SocialLinks.js";
import Timeline from "./components/Timeline.js";
import LineWithCircle from './components/LineWithCircle.js';
import MouseFollower from "./components/MouseFollower.js";
import Navigation from "./components/Navigation.js";
import Projects from "./components/Projects.js";


//import externalLink from "@/app/img/externalLink.png"; // Import the image

import "./styles/globals.css";


export default function Home() {
  return (
    <div className="container">
    
      <div className="content">

        <MouseFollower />

        {/* Left Section */}
        <div className="sidebar">

          <Header />
          <LineWithCircle position="right" type="solid" length="100%" />
          <br />
          <LineWithCircle position="right" type="hollow" length="60%" />
          <SocialLinks />
          <Navigation />
        </div>

        {/* Right Section */}
        <div className="main-content">
          <div class="vertical-line"></div>
          <section id="about">
            <About />
          </section>
          <section id="timeline">
            <Timeline />
            <div className="timeline-header">
              <div className="link-to">
                <a href="/bui-resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-link">
                  <h4>View Resume</h4>
                 {/* <Image src={externalLink} alt="external link icon" width={20} height={20} /> */}
                </a>
              </div>
            </div>
          </section>
          <div class="separator"><LineWithCircle position="right" type="hollow" length="40%" /></div>

          <section id="project">
            <Projects />
          </section>
        </div>


      </div >




      <footer>
        <div class="container-fluid">
          <div class="row">
            <p>Updated 2025, Marissa Bui. Designed using Figma. Coded and Built with Node.js</p>
          </div>
        </div>
      </footer>
    </div >


  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();