import React, { Component } from 'react';
import ErrorPage from '../ErrorPage';
import LoadingSpinner from '../../layouts.js/LoadingSpinner';
import * as api from '../../../api';

class SignUp extends Component {
  state = {
    username: '',
    name: '',
    avatar_url: '',
    error: null
  };
  render() {
    const { error, username, name, avatar_url } = this.state;
    if (error) return <ErrorPage error={error} />;

    return (
      <>
        <div>
          <div className="container-fluid bg-dark " style={{ height: 130 }}>
            <div className="row ">
              <div className="col text-white mt-5" style={{ fontSize: 32 }}>
                ᔕIGᑎ ᑌᑭ ᕼEᖇE
              </div>
            </div>
          </div>
          <form
            onSubmit={this.addUser}
            className="bg-dark "
            style={{ height: 800 }}
          >
            <div className="form-group col-sm-3 mx-auto ">
              <label className=" text-white" htmlFor="inlineFormInput ">
                Username
              </label>
              <input
                type="text"
                name="username"
                value={username}
                className="form-control"
                id="inlineFormInput"
                placeholder="Enter Username"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group col-sm-3 mx-auto">
              <label className=" text-white" htmlFor="inlineFormInput">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={name}
                className="form-control"
                id="inlineFormInput"
                placeholder="Enter Name"
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group col-sm-3 mx-auto">
              <label
                className=" text-white"
                htmlFor="exampleInputAvtar col-sm-2"
              >
                Avatar URL
              </label>
              <input
                type="text"
                name="avatar_url"
                value={avatar_url}
                className="form-control"
                id="exampleInputAvtar"
                aria-describedby="avatar-input"
                placeholder="Enter url"
                onChange={this.handleChange}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={() => {
                window.confirm('Account Now Created');
              }}
            >
              Add Account
            </button>
          </form>
        </div>
        <div className="showComs"></div>
      </>
    );
  }

  componentDidUpdate = (prevProps, prevState) => {
    const { ...newUser } = this.state;
    if (this.state.newUser !== prevState.newUser) this.addUser(newUser);
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
  };

  addUser = e => {
    e.preventDefault();
    const { ...newUser } = this.state;
    const { value } = e.target;
    api.postUser(newUser).then(({ username }) => {
      this.setState({ [newUser]: value });
    });
  };
}

export default SignUp;
