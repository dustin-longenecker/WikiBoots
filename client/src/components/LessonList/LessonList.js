import React from 'react';
import { Table } from 'reactstrap';


export const LessonList = ({ children }) => {
  return (
    <Table bordered>
      <thead>
        <tr>
          <th>Select a Lesson</th>
        </tr>
      </thead>
      <tbody>
          {children}
      </tbody>
    </Table>
  );
};

