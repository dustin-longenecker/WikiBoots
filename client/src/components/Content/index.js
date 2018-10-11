import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import {LessonList, ListItem} from "../LessonList";

class Content extends Component {
  state = {
    lessons: []
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

  
//   deleteBook = id => {
//     API.deleteBook(id)
//       .then(res => this.loadBooks())
//       .catch(err => console.log(err));
//   };
  
  // handleInputChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };
  //
  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   if (this.state.title && this.state.author) {
  //     API.saveBook({
  //       title: this.state.title,
  //       author: this.state.author,
  //       synopsis: this.state.synopsis
  //     })
  //       .then(res => this.loadBooks())
  //       .catch(err => console.log(err));
  //   }
  // };

  render() {
    return (
      <div>
        <h2>EXAMPLE LESSON TITLE</h2>
        <p>EXAMPLE LESSON INFORMATION</p>
        {this.state.lessons.length ? (
            <LessonList>
                {this.state.lessons.map(lesson => (
                    <ListItem key={lesson._id}>
                    <Link to={"/lessons/"+lesson._id}>
                    <strong> 
                    {lesson.title}
                    </strong>
                    </Link>
                    </ListItem>
                ))}
        </LessonList> ) : (<h3> No results to display</h3>)}

        
      </div>
      
    );
  }
}

export default Content;
