import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import AddNote from '../AddNote';

export default class LessonForm extends React.Component {
  render() {
    return (
      <Form id="lessonSubmitForm">

        <FormGroup row>
          <Label for="exampleText" sm={2}>Username</Label>
          <Col sm={10}>
            <Input type="text" name="text" id="userName"/>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="exampleSelect" sm={2}>Comment</Label>
          <Col sm={10}>
          <Input type="text" name="text" id="commentSubject">
          </Input>
          </Col>
        </FormGroup>
        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button id="commentSubmitButton">Submit</Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}
