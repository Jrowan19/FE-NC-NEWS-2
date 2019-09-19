import React, { Component } from 'react';
import * as api from '../../api';
import LoadingSpinner from '../../layouts.js/LoadingSpinner';

class User extends Component {
  state = {
    user: null,
    isLoading: true
  };

  componentDidMount() {
    this.fetchUser();
  }

  fetchUser = () => {
    const { username } = this.props;
    api.getUser(username).then(user => {
      this.setState({ user, isLoading: false });
    });
  };

  render() {
    const { user, isLoading } = this.state;
    if (isLoading) return <LoadingSpinner />;
    return (
      <div className="container">
        <h2>{user.username}'s Profile</h2>
        <h3>Name: {user.name}</h3>
        <img src={user.avatar_url} alt={user.username} />
      </div>
    );
  }
}
export default User;
