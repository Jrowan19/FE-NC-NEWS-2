import React from 'react';
import { Link } from '@reach/router';

const NavBar = props => {
  console.log(props.addUser);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top border border-primary">
      <Link
        className="navbar-brand text-danger m-5 text-right font-weight-bold "
        to="/"
      >
        <div className="showComs">
          <button className="btn btn-outline-primary mt-4 mb-2">
            {' '}
            <i className="fas fa-home"></i> ᑎᑕ ᑎEᗯᔕ
          </button>
        </div>
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
              <div className="showComs">
                <button className="btn btn-outline-danger">ᗩᖇTIᑕᒪEᔕ </button>
              </div>
            </Link>
          </li>
          <li className="nav-item mt-4 mb-2">
            <Link
              className="nav-link text-white font-weight-bold"
              to="/topics/coding"
            >
              <div className="showComs">
                <button className="btn btn-outline-warning"> ᑕOᗪIᑎG</button>
              </div>
            </Link>
          </li>
          <li className="nav-item mt-4 mb-2">
            <Link
              className="nav-link text-white font-weight-bold"
              to="/topics/football"
            >
              <div className="showComs">
                <button className="btn btn-outline-primary"> ᖴOOTᗷᗩᒪᒪ</button>
              </div>
            </Link>
          </li>
          <li className="nav-item mt-4 mb-2">
            <Link
              className="nav-link text-white font-weight-bold"
              to="/topics/cooking"
            >
              <div className="showComs">
                <button className="btn btn-outline-success"> ᑕOOKIᑎG </button>
              </div>
            </Link>
          </li>
          <li className="nav-item mt-4 mb-2">
            <Link className="nav-link text-white font-weight-bold" to="/topics">
              <div className="showComs">
                <button className="btn btn-outline-danger"> TOᑭIᑕᔕ </button>
              </div>
            </Link>
          </li>
          {/* <li className="nav-item mt-4 mb-2">
            <Link className="nav-link text-white font-weight-bold" to="/signup">
              <button className="btn btn-outline-primary"> ᔕIGᑎ ᑌᑭ</button>
            </Link>
          </li>
          <li className="nav-item mt-4 mb-2">
            <Link className="nav-link text-white font-weight-bold" to="/users">
              <button className="btn btn-outline-primary"> All Users</button>
            </Link>
          </li> */}
        </ul>
        <form className="form-row align-items-center mb-2">
          <div className="dropdown ml-3 mt-3 mt-4">
            <select
              className="btn btn-primary dropdown-toggle font-weight-bold"
              type="text"
              name="username"
              value={props.username}
              onChange={props.handleUserChange}
            >
              <option value="jessjelly"> jessjelly </option>
              <option value="grumpy19">grumpy19</option>
              <option value="cooljmessy">cooljmessy</option>
              <option value="tickle122"> tickle122</option>
              <option value="Peanut"> Peanut</option>
            </select>
            <Link
              className="btn btn-outline-primary btn-sm m-2"
              to={`/users/${props.username}`}
            >
              View Profile
            </Link>
          </div>
          <p className="text-white ml-3 mt-4 mb-2">
            <i className="fas fa-user" /> Logged in as {props.username}
          </p>
        </form>
      </div>
    </nav>
  );
};

export default NavBar;
