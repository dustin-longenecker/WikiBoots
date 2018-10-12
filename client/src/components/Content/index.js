import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import { LessonList, ListItem } from "../LessonList";
import Lesson from "../Lesson";
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import * as routes from '../../constants/routes';


class Content extends Component {
  state = {
    lessons: [],
    currentLesson: {}
  };

  componentDidMount() {
    this.loadLessons();
  }

  loadLessons = () => {
    API.getLessons()
      .then(res =>
        this.setState({ lessons: res.data })
      )
      .catch(err => console.log(err));
  };

  selectLesson = (id) => {
    API.getLesson(id)
      .then(res =>
        this.setState({ currentLesson: res.data })
      )
      .catch(err => console.log(err))
  };

  render() {
    return (
      <div className = "row">
        {this.state.lessons.length ? (
          <LessonList>
            {this.state.lessons.map(lesson => (
              <ListItem key={lesson._id}>
                <Link to={"/lessons/" + lesson._id}>
                  <strong>
                    {lesson.title}
                  </strong>
                </Link>
              </ListItem>
            ))}
          </LessonList>) : (<h3> No results to display</h3>)}
        <Router>
        <Route exact path={routes.LESSONCONTENT} component={() => <Lesson />} />
        </Router>
      </div>

    );
  }
}

export default Content;
