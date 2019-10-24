import React, { Component } from 'react';
import * as api from '../../../api';
import { navigate } from '@reach/router';
import ErrorPage from '../ErrorPage';
import LoadingSpinner from '../../layouts.js/LoadingSpinner';

class AddUser extends Component {
  state = {
    username: '',
    name: '',
    avatar_url: '',
    error: null,
    isLoading: false
  };
  render() {
    const { username, name, avatar_url, error, isLoading } = this.state;
    if (error) return <ErrorPage error={error} />;
    if (isLoading) return <LoadingSpinner />;
    return (
      <form onSubmit={this.postUser}>
        <label htmlFor="username">enter username:</label>
        <input
          name="username"
          value={username}
          onChange={this.handleFormChange}
          required
        />
        <label htmlFor="name">enter name:</label>
        <input
          name="name"
          value={name}
          onChange={this.handleFormChange}
          required
        />
        <label htmlFor="avatar_url">enter avatar url:</label>
        <input
          name="avatar_url"
          value={avatar_url}
          onChange={this.handleFormChange}
        />
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <button type="submit">add new user</button>
        )}
      </form>
    );
  }

  handleFormChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  postUser = e => {
    e.preventDefault();
    this.setState({ isLoading: true }, () => {
      const { error, isLoading, ...newUser } = this.state;
      api
        .postUser(newUser)
        .then(({ username }) => {
          this.props.handleUserChange(username);
          navigate('/');
        })
        .catch(({ response: { data: { message }, status } }) => {
          this.setState({
            error: { message, status }
          });
        });
    });
  };
}

export default AddUser;
