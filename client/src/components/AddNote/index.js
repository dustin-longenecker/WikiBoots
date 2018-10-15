import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import API from "../../utils/API";

export default class LessonForm extends React.Component {

  state = {
    user: "",
    comment: ""
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("ID: " + this.props.id);
    console.log("Data: ", this.state);
    if (this.state.user && this.state.comment) {
      API.saveNote(this.props.id, {
        user: this.state.user,
        comment: this.state.comment,
      })
        .then(res => console.log(res)) 
        .catch(err => console.log(err));
    }
  };


  render() {
    return (
      <Form id="lessonSubmitForm">

        <FormGroup row>
          <Label for="user" sm={2}>Username</Label>
          <Col sm={10}>
            <Input type="text" name="user" id="userName" value={this.state.user} onChange={this.handleInputChange}/>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="comment" sm={2}>Comment</Label>
          <Col sm={10}>
          <Input type="text" name="comment" id="commentSubject" value={this.state.comment} onChange={this.handleInputChange}>
          </Input>
          </Col>
        </FormGroup>
        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button id="commentSubmitButton" onClick={this.handleFormSubmit}>Submit</Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}
