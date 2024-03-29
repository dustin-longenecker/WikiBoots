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
import {Table, Row, Col} from 'reactstrap';
import LessonForm from '../LessonForm';



class Content extends Component {
  state = {
    lessons: [],
    currentLesson: {}
  };

  componentDidMount() {
    this.loadLessons();
    if(this.props.id)
    {
      this.selectLesson(this.props.id); //Need this.state.currentLesson to update when lesson is clicked when already viewing a lesson.
    }
  }

  loadLessons = () => {
    API.getLessons()
      .then(res =>
        {this.setState({ lessons: res.data })
        console.log(res)}
      )
      .catch(err => console.log(err));
  };

  selectLesson = (id) => {
    API.getLesson(id)
      .then(res => this.setState({ currentLesson: res.data }))
      .catch(err => console.log(err))
  };


  render() {
    return (
      <Table>
        <Row>
        <Col md="9">
          {this.props.id ? (
            <Lesson data = {this.state.currentLesson} id = {this.props.id} />

            ) : (
              <div>
              <h3> Create a lesson </h3>
              <LessonForm/>
              </div>
            )}
            </Col>
        <Col md="3">
        {this.state.lessons.length ? (
          <LessonList>
            {this.state.lessons.map(lesson => (
              <ListItem key={lesson._id}>
                <Link onClick={() => this.selectLesson(lesson._id)} to={"/lessons/" + lesson._id}>
                  <strong>
                    {lesson.title}
                  </strong>
                </Link>
              </ListItem>
            ))}
          </LessonList>) : (<h3> No results to display</h3>)}
          </Col>

            </Row>
      </Table>

    );
  }
}

export default Content;
