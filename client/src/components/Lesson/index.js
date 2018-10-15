import React, {Component} from 'react';
import Notes from '../Notes';
import AddNote from '../AddNote';
class Lesson extends Component {
  render() {
    return (
      <div className = "col-sm-10">
        <h2>title</h2>title explanation code video notes
        <p>user</p>
        <p>explanation</p>
        <p><a>code</a></p>
        <p>video</p>
        <Notes/>
        <AddNote/>
      </div>
    );
  }
}
  export default Lesson;
