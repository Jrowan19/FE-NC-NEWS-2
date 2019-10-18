import React, { Component } from 'react';
import * as api from '../../../api';
import LoadingSpinner from '../../layouts.js/LoadingSpinner';

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
        <div className="text-white">
          {users.map(user => {
            return (
              <ul>
                <li>{user.username}</li>
              </ul>
            );
          })}
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
}

export default AllUsers;
