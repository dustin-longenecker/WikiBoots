import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import * as routes from '../../constants/routes';
import SignOutButton from "../SignOut";
import Navigation from "../Navigation";
export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
        <Navbar color="faded" light id="navbarFormat">
          <NavbarBrand href="/" className="mr-auto">WikiBoots Logo</NavbarBrand>
          <input className="" type="search" placeholder="Search"></input>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href={routes.LANDING}>Browse All Lessons</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">About WikiBoots</NavLink>
              </NavItem>
              <NavItem>
              <Navigation/>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
