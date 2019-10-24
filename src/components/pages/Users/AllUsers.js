import React, { Component } from 'react';
import * as api from '../../../api';
import LoadingSpinner from '../../layouts.js/LoadingSpinner';
import AddUser from './AddUser';

class AllUsers extends Component {
  state = {
    users: [],
    isLoading: true
  };
  render() {
    const { users, isLoading } = this.state;
    if (isLoading) return <LoadingSpinner />;
    return (
      <div>
        <div className="container-fluid bg-dark" style={{ height: 35 }}>
          <div className="row">
            <div className="col"></div>
          </div>
        </div>
        <div className="text-white bg-dark">
          {users.map(user => {
            return (
              <ul key={user.username}>
                <li>{user.username}</li>
                <li>{user.name}</li>
                <li>{user.avatar_url}</li>
              </ul>
            );
          })}
          <AddUser
            addUser={this.addUser}
            username={this.props.username}
            avatar_url={this.props.avatar_url}
            name={this.props.name}
          />
        </div>
      </div>
    );
  }

  componentDidMount = () => {
    this.fetchAllUsers();
  };

  fetchAllUsers = () => {
    api.getAllUsers().then(users => {
      this.setState({ users, isLoading: false });
    });
  };

  addUser = user => {
    const { username, avatar_url, name } = this.props;
    api.postUser(username, avatar_url, name, user).then(newUser => {
      this.setState(({ users }) => {
        console.log(users);
        return { users: [...users, newUser] };
      });
    });
  };
}

export default AllUsers;
