import React from "react";
import "../styles/TimelineItem.css";

const TimelineItem = ({ role, duration, description, skill }) => {
  return (
    <div className="timeline-item">
      <h3 className="role">{role}</h3>
      <p className="duration">{duration}</p>
      <p className="description">{description}</p>
      <div className="skills">
        {skill && skill.length > 0 ? (
          skill.map((item, index) => (
            <span key={index} className="skill">{item}</span>
          ))
        ) : (
          <p></p> 
        )}
      </div>
    </div>
  );
};

export default TimelineItem;
