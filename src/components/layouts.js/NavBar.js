import React, { Component } from 'react';
import { Link } from '@reach/router';

class NavBar extends Component {
  render() {
    return (
      
      <nav
        className="navbar navbar-expand-lg navbar-light nav-background fixed-top border border-nav-border"
        style={{
          marginLeft: 5,
          marginRight: 5
        }}
      >
        <Link
          className="navbar-brand text-danger m-5 text-right font-weight-bold "
          to="/"
        >
          <button className="btn btn-outline-primary mt-4 mb-2">
            {' '}
            <i className="fas fa-home"></i> NC News
          </button>
        </Link>

        <button
          className="navbar-toggler btn btn-light m-2 btn btn-lg"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon btn btn-light btn-lg"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active mt-4 mb-2">
              <Link
                className="nav-link text-white font-weight-bold"
                to="/articles"
              >
                <button className="btn btn-outline-danger"> Articles </button>
              </Link>
            </li>
            <li className="nav-item mt-4 mb-2">
              <Link
                className="nav-link text-white font-weight-bold"
                to="/topics/coding"
              >
                <button className="btn btn-outline-warning"> Coding </button>
              </Link>
            </li>
            <li className="nav-item mt-4 mb-2">
              <Link
                className="nav-link text-white font-weight-bold"
                to="/topics/football"
              >
                <button className="btn btn-outline-primary"> Football</button>
              </Link>
            </li>
            <li className="nav-item mt-4 mb-2">
              <Link
                className="nav-link text-white font-weight-bold"
                to="/topics/cooking"
              >
                <button className="btn btn-outline-success"> Cooking </button>
              </Link>
            </li>
            <li className="nav-item dropdown mt-4 mb-2">
              <div
                className="nav-link dropdown-toggle text-white font-weight-bold"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <button className="btn btn-outline-danger"> Topics</button>
              </div>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item " to="/topics">
                  All
                </Link>
              </div>
            </li>
          </ul>
          <form className="form-row align-items-center mb-2">
            <div className="dropdown ml-3 mt-3 mt-4">
              <select
                className="btn btn-primary dropdown-toggle font-weight-bold"
                type="text"
                name="username"
                value={this.props.username}
                onChange={this.props.handleUserChange}
              >
                <option value="jessjelly"> jessjelly </option>
                <option value="grumpy19">grumpy19</option>
                <option value="cooljmessy">cooljmessy</option>
                <option value="tickle122"> tickle122</option>
                <option value="rowandinho"> rowandinho</option>
              </select>
              <Link
                className="btn btn-outline-primary btn-sm m-2"
                to={`/users/${this.props.username}`}
              >
                View Profile
              </Link>
            </div>
            <p className="text-white ml-3 mt-4 mb-2">
              <i className="fas fa-user" /> Logged in as {this.props.username}
            </p>
          </form>
        </div>
      </nav>
    );
  }
}

export default NavBar;
