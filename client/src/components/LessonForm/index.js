import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class LessonForm extends React.Component {
  render() {
    return (
      <Form id="lessonSubmitForm">

        <FormGroup row>
          <Label for="exampleText" sm={2}>Name of Lesson</Label>
          <Col sm={10}>
            <Input type="text" name="text" id="lessonName"/>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="exampleSelect" sm={2}>Subject</Label>
          <Col sm={10}>
          <Input type="select" name="select" id="lessonSubject">
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
            <Input type="textarea" name="text" id="lessonContent" rows="10"/>
          </Col>
        </FormGroup>

        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button id="lessonSubmitButton">Submit</Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}



