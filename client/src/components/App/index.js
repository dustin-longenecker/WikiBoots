import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import LessonForm from '../LessonForm';
import Navigation from '../Navigation';
import NavBar from '../Nav_Bar';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import withAuthentication from '../Session/withAuthentication';
import * as routes from '../../constants/routes'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
  Jumbotron,
  Button
} from 'reactstrap';



import './index.css';

const App = () =>
  <Router>
    <div className="app">
      <NavBar/>
      <LessonForm/>
      <Navigation/>

      <hr/>

       

      <Route exact path={routes.LANDING} component={LandingPage} />
      <Route exact path={routes.SIGN_UP} component={SignUpPage} />
      <Route exact path={routes.SIGN_IN} component={SignInPage} />
      <Route exact path={routes.PASSWORD_FORGET} component={PasswordForgetPage} />
      <Route exact path={routes.HOME} component={HomePage} />
      <Route exact path={routes.ACCOUNT} component={AccountPage} />
      <Route exact path={routes.LESSONCONTENT} component={LandingPage}  />

      
      <hr/>

    </div>
  </Router>

export default withAuthentication(App);
