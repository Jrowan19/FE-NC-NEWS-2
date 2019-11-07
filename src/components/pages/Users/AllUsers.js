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
    const { username } = this.props;
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
                {username === user.username && (
                  <button
                    type="button"
                    className="btn btn-outline-danger btn-sm mx-auto mt-3"
                    style={{ width: '10rem' }}
                    onClick={() => {
                      if (
                        window.confirm(
                          'Are you sure you wish to delete this account?'
                        )
                      )
                        this.removeUser(user.username);
                    }}
                  >
                    {' '}
                    Remove Account
                  </button>
                )}
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

  componentDidUpdate(prevProps, prevState) {
    if (prevState.users !== this.state.users) {
      api.getAllUsers(this.props.username).then(user => {
        this.setState({ user, isLoading: false });
      });
    }
  }

  fetchAllUsers = () => {
    api.getAllUsers().then(users => {
      console.log(users);
      this.setState({ users, isLoading: false });
    });
  };

  removeUser = username => {
    api.deleteUser(username);
    this.setState(({ users }) => {
      console.log(users);
      return {
        users: users.filter(user => user.username !== username)
      };
    });
  };
}

export default AllUsers;
