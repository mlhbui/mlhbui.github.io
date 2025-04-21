import React from "react";
import "../styles/TimelineItem.css";

const TimelineItem = ({ role, institution, duration, description, skill, highlightedWords = [] }) => {
  const descriptionArray = Array.isArray(description) ? description : [description];

  const renderDescription = () => {
    return (
      /* Change to ul for list format*/
      <p className="description-list">
        {descriptionArray.map((point, index) => {
          const highlightedPoint = point.split(' ').map((word, idx) => {
            const shouldHighlight = highlightedWords.some((colorWord) =>
              word.toLowerCase().includes(colorWord.toLowerCase())
            );

            if (shouldHighlight) {
              return (
                <span key={idx} style={{ color: "#FECC51" }}>
                  {word}{' '}
                </span>
              );
            }

            return word + ' ';
          });

          return <p key={index}>{highlightedPoint}</p>;
        })}
      </p>
    );
  };

  return (
    <div className="timeline-item">
      <div className="timeline-header">
        <div className="left">
          <h3 className="role">{role}</h3>
          <h5 className="institution">{institution}</h5>
        </div>
        <p className="duration">{duration}</p>
      </div>

      {/* Render description with highlights */}
      <div className="description"> 
      {renderDescription()}
      </div>
      {/* Render skills */}
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
