import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import API from "../../utils/API";

export default class LessonForm extends React.Component {
  state = {
    title: "",
    subject: "",
    explanation: "",
    code: "",
    video: "",
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.explanation) {
      API.saveLesson({
        title: this.state.title,
        subject: this.state.subject,
        explanation: this.state.explanation,
        code: this.state.code,
        video: this.state.video
      }).then(res => console.log(res))
        .then(() => window.location.reload())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Form id="lessonSubmitForm">

        <FormGroup row>
          <Label for="exampleText"  sm={2}>Name of Lesson</Label>
          <Col sm={10}>
            <Input
              placeholder="Lesson Name"
              type="text"
              name="title"
              id="lessonName"
              value={this.state.title}
              onChange={this.handleInputChange}
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="exampleSelect" sm={2}>Subject</Label>
          <Col sm={10}>
          <Input type="select" name="subject" id="lessonSubject" onChange={this.handleInputChange} value={this.state.subject}>
            <option>Choose Your Subject</option>
            <option>CSS</option>
            <option>Express</option>
            <option>HTML</option>
            <option>JavaScript</option>
            <option>jQuery</option>
            <option>MongoDB</option>
            <option>Node</option>
            <option>React</option>
            <option>SQL</option>
          </Input>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="exampleText" sm={2}>Content</Label>
          <Col sm={10}>
            <Input
              placeholder="Lesson Content"

              type="textarea"
              name="explanation"
              id="lessonContent"
              rows="10"
              value={this.state.explanation}
              onChange={this.handleInputChange}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleText" sm={2}>Code</Label>
          <Col sm={10}>
            <Input
              placeholder="Code"

              type="textarea"
              name="code"
              id="lessonCode"
              rows="10"
              value={this.state.code}
              onChange={this.handleInputChange}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleText" sm={2}>Video</Label>
          <Col sm={10}>
            <Input
              placeholder="Video Link"

              type="text"
              name="video"
              id="lessonVideo"
              rows="10"
              value={this.state.video}
              onChange={this.handleInputChange}
            />
          </Col>
        </FormGroup>

        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button
              id="lessonSubmitButton"
              onClick={this.handleFormSubmit}
            >
              Submit
            </Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}
