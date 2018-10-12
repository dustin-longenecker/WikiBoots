import React from 'react';


export const LessonList = ({ children }) => {
  return (
    <div className="col-sm-2 list-overflow-container">
      <ul className="list-group">
        {children}
      </ul>
    </div>
  );
};

