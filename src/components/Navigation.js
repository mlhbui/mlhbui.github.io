'use client'

import "../styles/Navigation.css";
import { useEffect, useState } from 'react';
import LineWithCircle from "./LineWithCircle";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = '';

      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        
        if (rect.top <= window.innerHeight / 2 && rect.bottom > 0) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { section: 'about', label: 'About', link: '#about' },
    { section: 'timeline', label: 'Work', link: '#timeline' },
    { section: 'project', label: 'Projects', link: '#project' },  
  ];

  return (
    <nav>
      <ul>
        {navItems.map(({ section, label, link }) => (
          <li key={section} className={`nav-item ${activeSection === section ? 'active' : ''}`}>
            <LineWithCircle position="left" type="solid" length="100%" />
            <a href={link}>{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
