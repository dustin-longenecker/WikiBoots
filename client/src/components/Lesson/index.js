import React, {Component} from 'react';
import Notes from '../Notes';
class Lesson extends React {
  render() {
    return (
      <div>
        <h2>title</h2>title explanation code video notes
        <p>user</p>
        <p>explanation</p>
        <p><a>code</a></p>
        <p>video</p>
        <Notes/>
      </div>
    );
  }
}
  export default Lesson;
