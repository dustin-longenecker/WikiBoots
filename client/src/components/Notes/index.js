import React, {Component} from 'react';
class Notes extends Component {
  render() {
    console.log(this.props.data); //Why won't it let me dig into this.props.data here?  ie this.props.data.body
    return (
      <div>
        <h3>User</h3>
        {/* <p>{this.props.data.title}</p> */} 
        {/* <p>{this.props.data.body}</p> */}
      </div>
    );
  }
}
  export default Notes;
