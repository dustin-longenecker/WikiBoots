import React, {Component} from 'react';
import Notes from '../Notes';
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
        <h2>{this.props.data.title}</h2>
        <p>Subject: {this.props.data.subject}</p>
        <p>user</p>
        <p>{this.props.data.explanation}</p>
        <p>{this.props.data.code}</p>
        <p><a href = {this.props.data.video}>{this.props.data.video}</a></p>
        <Notes data = {this.props.data.notes}/>
        {/* {console.table(this.state)} */}
        {/* {this.state.noteData.map(note => <Notes data = {note}/>)} */}
      </div>
    );
  }
}
  export default Lesson;
