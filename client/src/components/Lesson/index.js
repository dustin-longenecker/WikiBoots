import React, {Component} from 'react';
import Notes from '../Notes';
import AddNote from '../AddNote';
class Lesson extends Component {

  state = {
    noteData: ["0"]
  }

  componentDidMount() {
    // let newValue = this.state.noteData.push(this.props.data.notes);
    // this.setState({"noteData": newValue});
    console.log(this.props);

  }

  render() {
    return (
      <div className = "col-sm-10">
        <h2>Title: {this.props.data.title}</h2>
        <p>Subject: {this.props.data.subject}</p>
        <hr/>
        <p>Explanation: {this.props.data.explanation}</p>
        <p>Code: {this.props.data.code}</p>
        <p>Video: <a href = {this.props.data.video}>{this.props.data.video}</a></p>
        <Notes data = {this.props.data.notes}/>
        {/* {console.table(this.state)} */}
        {/* {this.state.noteData.map(note => <Notes data = {note}/>)} */}
        <AddNote/>
      </div>
    );
  }
}
  export default Lesson;
