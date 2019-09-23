import React from 'react';
import { Link } from '@reach/router';

const SideBar = props => {
  return (
    <>
      <div className="container-fluid ">
        <div className="row">
          <nav className="col-md-10 d-none d-md-block sb-bg sidebar border border-light">
            <Link className="font-weight-bold" to="/">
              <i className="fas fa-home primary-lg"></i> NC NEWS
            </Link>
            <div className="sidebar-sticky">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <Link className="nav-link active" to="/topics">
                    <span data-feather="home"></span>
                    Topics <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/articles">
                    <span data-feather="file"></span>
                    Articles
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/topics/football">
                    <span data-feather="shopping-cart"></span>
                    Football
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/topics/coding">
                    <span data-feather="users"></span>
                    Coding
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/topics/cooking">
                    <span data-feather="bar-chart-2"></span>
                    Cooking
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={`/users/${props.author}`}>
                    <span data-feather="layers"></span>
                    Users
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          <div className="col-md-10 offset-md-2">
            <div className="container">
              <div className="row">
                <div name="dashboard" className="col-md-12"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
