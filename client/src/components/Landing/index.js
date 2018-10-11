import React from 'react';
import Lesson from 'LessonList';
import Content from 'Content';

class LandingPage extends Component= () =>
  <div>
    <h1>WikiBoots</h1>
    <Navigation/>
    <p>Welcome to WikiBoots, the site created by BootCamp students for bootcamp students, etc.. Brief explanation of what is.</p>
    <Content> </Content>
    <LessonList> </LessonList>

  </div>

export default LandingPage;
