import React, {Fragment, Component} from 'react';
import Content from '../Content';
import AddNote from '../AddNote';
import LessonForm from '../LessonForm';
import { Container, Row, Col, Table } from 'reactstrap';
class LandingPage extends Component {


  render() {

    return (
      <Container className="body-format" id="landing-body">
        <Row>
          <Col md="9">
            <h3 id="hp-header">Created by BootCamp students, for BootCamp students</h3>
            <div id="hp-p-tag">
            <p>There are plenty of sites on the web for you to learn from seasoned experts.  While there's nothing wrong with that, sometimes when you're first trying to wrap your head around an alien topic such as coding, sometimes it's best to hear it explained by someone who has just gone through what you are going through now.</p>
            <p>That's why we made WikiBoots.  We provide tips, tricks, and walkthroughs of the most basic topics to help bolster your foundational understanding.  So don't be afraid, if you don't understand go ahead an ask.  You are amongst friends here!</p>
            <p>So go ahead an search for a lesson to start learning.  And once you feel confident on that topic, go ahead an post your own lesson and help the next generation of Boot Campers!</p>
            </div>
          </Col>
          <Col md="3">
          <Table bordered>
        <thead>
          <tr>
            <th>Select a Lesson</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>[append lessons here]</td>
          </tr>
          <tr>
            <td>[append lessons here]</td>
          </tr>
          <tr>
            <td>[append lessons here]</td>
          </tr>
          <tr>
            <td>[append lessons here]</td>
          </tr>
          <tr>
            <td>[append lessons here]</td>
          </tr>
          </tbody>
      </Table> 

            {/* THIS IS THE CODE THAT PULLS IN THE FIRST LESSON */}
            {/* {this.props.match.params.id ? (
              <Content id={this.props.match.params.id}> </Content>
              ) : (
                <div>
                <Content></Content>
              </div>    
            )} */}
          </Col>      
        </Row>
      </Container>
    );
  }
}
  export default LandingPage;
