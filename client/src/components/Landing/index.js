import React, {Fragment, Component} from 'react';
import Content from '../Content';
import AddNote from '../AddNote';
import LessonForm from '../LessonForm';
class LandingPage extends Component {

  render() {

    return (
      <div>
        <h1>WikiBoots</h1>
        <p>Welcome to WikiBoots, the site created by BootCamp students for bootcamp students, etc.. Brief explanation of what is.</p>
        {this.props.match.params.id ? (
          <Content id={this.props.match.params.id}> </Content>
        ) : (
          <div>
            <Content></Content>
            <LessonForm/>
          </div>
        )}
      </div>
    );
  }
}
  export default LandingPage;
