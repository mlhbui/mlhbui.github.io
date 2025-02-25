import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "../styles/SocialLinks.css";

const SocialLinks = () => {
  return (
    <div className="social-links">
      <a href="https://www.linkedin.com/in/marissa-bui-ab1041254/" className="icon"><FaLinkedin size={35} /></a>
      <a href="https://github.com/mlhbui" className="icon"><FaGithub size={35} /></a>
      <a href="mailto:buimarissa@gmail.com" className="icon"><MdEmail size={35} /></a>
    </div>
  );
};

export default SocialLinks;
