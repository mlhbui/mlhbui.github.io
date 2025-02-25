import React from 'react';
import "../styles/LineWithCircle.css";

const LineWithCircle = ({ position = 'right', type = 'solid', length = '100%' }) => {
  return (
    <div className="line" style={{ width: typeof length === 'string' ? length : `${length}%` }}>
      <div
        className={`circle ${position === 'right' ? 'right' : 'left'} ${type === 'hollow' ? 'hollow' : 'solid'}`}
      ></div>
    </div>
  );
};

export default LineWithCircle;
