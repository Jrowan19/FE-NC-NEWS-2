import React from 'react';
import { Link } from '@reach/router';

const NavBar = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light nav-background fixed-top border border-nav-border">
      <form className="form-row align-items-center mb-2">
        <div className="dropdown ml-3 mt-3 mb-2">
          <select
            className="btn btn-primary dropdown-toggle font-weight-bold"
            type="text"
            name="username"
            value={props.username}
            onChange={props.handleUserChange}
          >
            <option value="jessjelly"> jessjelly</option>
            <option value="cooljmessy">cooljmessy</option>
            <option value="tickle122"> tickle122</option>
          </select>
        </div>
        <p className="text-white ml-3 mt-3 mb-2">
          <i className="fas fa-user" /> Logged in as {props.username}
        </p>
      </form>

      <Link
        className="navbar-brand text-danger m-5 text-right font-weight-bold"
        to="/"
      >
        <button className="btn btn-outline-primary">
          {' '}
          <i class="fas fa-home"></i> NC News
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
          <li className="nav-item active">
            <Link
              className="nav-link text-white font-weight-bold"
              to="/articles"
            >
              <button className="btn btn-outline-danger"> Articles </button>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-white font-weight-bold"
              to="/topics/coding"
            >
              <button className="btn btn-outline-warning"> Coding </button>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-white font-weight-bold"
              to="/topics/football"
            >
              <button className="btn btn-outline-primary"> Football</button>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-white font-weight-bold"
              to="/topics/cooking"
            >
              <button className="btn btn-outline-success"> Cooking </button>
            </Link>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle text-white font-weight-bold"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <button className="btn btn-outline-danger"> Topics</button>
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item " to="/topics">
                All
              </Link>
            </div>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-light my-2 my-sm-0 m-2"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default NavBar;
