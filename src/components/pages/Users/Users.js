import React, { Component } from 'react';
import * as api from '../../../api';
import LoadingSpinner from '../../layouts.js/LoadingSpinner';

class User extends Component {
  state = {
    user: [],
    isLoading: true
  };

  render() {
    const { user, isLoading } = this.state;
    //const { username} = this.props;
    if (isLoading) return <LoadingSpinner />;
    const { username, name, avatar_url } = user;

    return (
      <section className="nightBg">
        <div
          className="card mx-auto nightBg text-white border border-white"
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
    const author = this.props.username;
    const URL = `users/${author}`;
    api.getData(URL).then(({ user }) => {
      this.setState({ user, isLoading: false });
    });
  };
}
export default User;
