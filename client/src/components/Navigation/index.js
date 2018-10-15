import React, { Fragment } from 'react'
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import { compose } from 'recompose';
import { auth } from '../../firebase';


import SignOutButton from '../SignOut';
import * as routes from '../../constants/routes';

import { Navbar, NavLink, Nav, NavItem } from 'reactstrap';


const Navigation = ({ sessionStore }) =>
  <NavItem>
    { sessionStore.authUser
        ? <NavigationAuth />
        : <NavigationNonAuth />
    }
  </NavItem>

const NavigationAuth = () =>
    <NavLink onClick={auth.doSignOut}>Sign Out</NavLink>

const NavigationNonAuth = () =>
    <NavLink href={routes.SIGN_IN}>Sign In</NavLink>

export default compose(
  inject('sessionStore'),
  observer
)(Navigation);
