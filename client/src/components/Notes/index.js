import React, {Component} from 'react';
class Notes extends Component {
  render() {
    console.log("Notes component: ", this.props.data); //Why won't it let me dig into this.props.data here?  ie this.props.data.body
    return (
      <div>
        <h3>Notes</h3>
        <p>{this.props.data ? this.props.data.user : "" }</p>
        <p>{this.props.data ? this.props.data.comment: "No comments yet" }</p> 
      </div>
    );
  }
}
  export default Notes;
