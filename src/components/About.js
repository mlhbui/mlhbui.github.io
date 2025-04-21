import React from "react";
import "../styles/About.css";
import "../styles/globals.css";


// Helper function to highlight specific words 
const highlightText = (text, colorWords, color) => {
  const paragraphs = text.split('\n\n').map((paragraph, index) => {
    const highlightedWords = paragraph.split(' ').map((word, index) => {
      const shouldHighlight = colorWords.some((colorWord) =>
        word.toLowerCase().includes(colorWord.toLowerCase())
      );

      if (shouldHighlight) {
        return (
          <span key={index} style={{ color: color }}>
            {word}{' '}
          </span>
        );
      }
      return word + ' ';
    });

    return <p key={index}>{highlightedWords}</p>;
  });

  return paragraphs;
};

const About = () => {
  const colorWords = [
    'React',
    'Node.js',
    'Python',
    'Title Project',
    'accessible design',
    'AI/ML',
    'ethical technology',
    'Accessible Design',
    'Software Architecture',
    'Deep Learning',
    "Let",
    "connect!",
  ];
  const highlightColor = '#FECC51';  // Hex color

  const text = `I focus on building reliable, scalable, and user-centric applications.
With experience across the full software development lifecycle, I have designed and deployed systems using frameworks like React, Node.js, and Python within Agile teams.

In my recent role with the BullyBlocker Project, I led the development of intuitive user interfaces to identify positive design patterns and mitigate online harassment. I'm particularly passionate about accessible design and the potential for emerging technologies like AI/ML to drive innovation.

I\'m eager to apply my skills to projects that prioritize ethical technology and inclusivity. Beyond coding, I enjoy traveling, reading, and exploring hiking trails in the PNW.

Let's connect! Explore my portfolio or reach me through LinkedIn!`;

  return (
    <div className="about">
      <div id="intro">
        <h3>Hello, I am a software engineer based in Chicago. </h3>
      </div>
      {highlightText(text, colorWords, highlightColor)}
      <h3>Related Interests: </h3>
      <ul>
        <li> Accessible Design</li>
        <li> Software Architecture</li>
        <li> Deep Learning</li>
      </ul>
      <br />
    </div>
  );
};

export default About;