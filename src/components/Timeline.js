import React from "react";
import TimelineItem from "./TimelineItem";
import "../styles/Timeline.css";
import LineWithCircle from "./LineWithCircle";

const timelineData = [
  {
    role: "Research Assistant · BullyBlocker Project",
    duration: "2024 - Present",
    description: "Developing 10+ user interfaces for a social media research study. Using Figma to design an alternative social media option focused on wellbeing and preventing LGBTQ+ directed cyberbullying.",
    skill: ["Python", "PostgreSQL", "Figma"],

  },
  {
    role: "Web Administrator · Loyola Computer Science",
    duration: "July 2024 - Present",
    description: "Incorporating social media and news sections to the site for increased interaction and development. Maintaining front-end interface of site pages using custom content management system and web dev spaces. Facilitating outreach to university staff and student orgs. for engagement and information.",
  },
  {
    role: "Web Developer · Phoenix News",
    duration: "May 2024 - Present",
    description: "Formulating site analytics methods to develop a new user experience, leading to a 40% increase in activity in 6 months. Design 4+ multimedia options for online engagement, incorporating video and audio formats. Collaborating with the business manager to boost ad revenue by 213% through web integration and promotional efforts. Achieve a 10% increase in newsletter sign-ups within the first month of implementation by integrating MailChimp API.",
    skill: ["SEO Analysis", "WordPress", "MailChimpAPI"],
  },
  {
    role: "Office Assistant · Registrar of Loyola University Chicago",
    duration: "Sept. 2023 - May 2024",
    description: "Contributed 25% of the website approval process for university-wide catalog. Developed +5 online training guides for the transfer credit system, covering university partners nationwide. Streamlined database management tasks like URL associations, format, and content.",
    skill: ["Database Maintenance", "Courseleaf", "TES"],
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
          <TimelineItem {...item} />
        </div>
      </div>
    ))}
  </div>
  
  );
};


export default Timeline;
