import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

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
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>

              <NavItem>
                <NavLink href="/components/">Search Lessons</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Browse All Lessons</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Sign In</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Sign Up</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Sign Out</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">About WikiBoots</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}