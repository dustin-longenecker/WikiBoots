import React, {Component} from 'react';
import Notes from '../Notes';
import AddNote from '../AddNote';
class Lesson extends Component {
  
  render() {
    console.log("notes section: ", this.props.data.notes ? this.props.data.notes.body : "Hmm");
    return (
      <div className = "col-sm-10">
        <h2>Title: {this.props.data.title}</h2>
        <p>Subject: {this.props.data.subject}</p>
        <hr/>
        <p>Explanation: {this.props.data.explanation}</p>
        <p>Code: {this.props.data.code}</p>
        <p>Video: <a href = {this.props.data.video}>{this.props.data.video}</a></p>
        <Notes data = {this.props.data.notes}/>
        <AddNote id = {this.props.id}/>
      </div>
    );
  }
}
  export default Lesson;
