import React, { Component } from 'react';
import * as api from '../../../api';
import LoadingSpinner from '../../layouts.js/LoadingSpinner';
import ErrorPage from '../ErrorPage';

class User extends Component {
  state = {
    user: '',
    isLoading: true
  };

  render() {
    const { user, isLoading, error } = this.state;
    if (error) return <ErrorPage error={error} />;
    if (isLoading) return <LoadingSpinner />;
    const { username, name, avatar_url } = user;

    return (
      <section className="bg-dark" style={{ height: 800 }}>
        <div className="container-fluid bg-dark" style={{ height: 35 }}>
          <div className="row">
            <div className="col"></div>
          </div>
        </div>
        <div
          className="card mx-auto bg-dark text-white border border-white"
          style={{ width: '18rem' }}
        >
          <img className="card-img-top" src={avatar_url} alt="profile" />
          <div className="card-body">
            <p className="card-text">Name: {name}</p>
            <p>Username: {username}</p>
          </div>
        </div>
      </section>
    );
  }

  componentDidMount = () => {
    this.fetchUser();
  };

  componentDidUpdate(prevProps) {
    if (prevProps.username !== this.props.username) this.fetchUser();
  }

  fetchUser = () => {
    const URL = `users/${this.props.username}`;
    api
      .getData(URL)
      .then(({ user }) => {
        this.setState({ user, isLoading: false });
      })
      .catch(({ response: { data: { message }, status } }) => {
        this.setState({
          error: { message, status }
        });
      });
  };
}
export default User;
