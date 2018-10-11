import React, {Component} from 'react';
import Lesson from '../LessonList';
import Content from '../Content';
import Navigation from '../Navigation';

class LandingPage extends Component {
  render() {
    return (
      <div>
        <h1>WikiBoots</h1>
        {/* <Navigation /> */}
        <p>Welcome to WikiBoots, the site created by BootCamp students for bootcamp students, etc.. Brief explanation of what is.</p>
        {/* <Content> </Content>
        <Lesson> </Lesson> */}

      </div>
    );
  }
}
  export default LandingPage;
