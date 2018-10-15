import React, {Component} from 'react';
import Content from '../Content';

class LandingPage extends Component {
  
  render() {

    return (
      <div>
        <h1>WikiBoots</h1>
        <p>Welcome to WikiBoots, the site created by BootCamp students for bootcamp students, etc.. Brief explanation of what is.</p>
        {this.props.match.params.id ? (
          <Content id={this.props.match.params.id}> </Content> 
        ) : (
          <Content></Content>
        )}


      </div>
    );
  }
}
  export default LandingPage;
