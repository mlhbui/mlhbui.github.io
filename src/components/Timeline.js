import React from "react";
import TimelineItem from "./TimelineItem";
import "../styles/Timeline.css";
import LineWithCircle from "./LineWithCircle";

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

const timelineData = [
  {
    role: "Research Assistant",
    institution: "BullyBlocker Project",
    duration: "2024 - Present",
    description: [
      "Developing 30+ user interfaces for an interface design research study. Using Figma to design an alternative social media model focused on wellbeing and preventing cyberbullying. Analyzing Meta social media data using SQL to identify cyberbullying and build machine learning models."],
    skill: ["Python", "PostgreSQL", "Figma", "Machine Learning"],
    highlightedWords: ['webs'],

  },
  {
    role: "Web Administrator",
    institution: "Loyola Computer Science",
    duration: "July 2024 - Present",
    description: "Maintaining front-end interface of site pages using custom educational CMS and web dev spaces. Facilitating outreach to university staff and student orgs. for engagement and information. ",
    highlightedWords: ['webs'],
  },
  {
    role: "Web Developer | Phoenix News",
    institution: "Phoenix News",
    duration: "May 2024 - Present",
    description: "Optimizing SEO and analytics to enhance the user experience, leading to a 40% increase in activity in 6 months. Design 4+ multimedia options for online engagement, incorporating video and audio formats. Collaborating with the business manager to boost ad revenue by 83% through web integration and promotional efforts. Achieve a 10% increase in newsletter sign-ups within the first month of implementation by integrating MailChimp API.",
    skill: ["SEO Analytics", "WordPress", "PHP", "HTML"],
    highlightedWords: ['webs'],
  },
  {
    role: "Technical Support Assistant",
    institution: "Registrar of Loyola University Chicago",
    duration: "Sept. 2023 - May 2024",
    description: "Contributed 25% of the website approval process for university-wide catalog. Developed +5 online training guides for the transfer credit system, covering university partners nationwide. Streamlined database management tasks like URL associations, format, and content.",
    skill: ["Database Management", "Courseleaf", "TES"],
    highlightedWords: ['wes'],
  },
];

const Timeline = () => {
  return (
    <div className="timeline">
      {timelineData.map((item, index) => (
        <div className="timeline_item" key={index}>
          <div className="line">
            <LineWithCircle position="left" type="solid" length="10%" />
          </div>
          <div className="timeline_entry">
            <TimelineItem {...item} highlightedWords={item.highlightedWords} />
          </div>
        </div>
      ))}
    </div>
  );
};


export default Timeline;