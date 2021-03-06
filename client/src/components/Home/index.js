import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { compose } from 'recompose';

import Content from '../Content';
import withAuthorization from '../Session/withAuthorization';
import { db } from '../../firebase';
import AddNote from '../AddNote';


class HomePage extends Component {
  componentDidMount() {
    const { userStore } = this.props;

    db.onceGetUsers().then(snapshot =>
      userStore.setUsers(snapshot.val())
    );
  }

  render() {
    const { users } = this.props.userStore;

    return (
      <div>
        <h1>Home</h1>
        <p>The Home Page is accessible by every signed in user.</p>
        <Content/>
        <AddNote/>

      </div>
    );
  }
}

const UserList = ({ users }) =>
// { !!users && <UserList users={users} /> }

  <div>
    <h2>List of Usernames of Users</h2>
    <p>(Saved on Sign Up in Firebase Database)</p>

    {Object.keys(users).map(key =>
      <div key={key}>{users[key].username}</div>
    )}
  </div>

const authCondition = (authUser) => !!authUser;

export default compose(
  withAuthorization(authCondition),
  inject('userStore'),
  observer
)(HomePage);