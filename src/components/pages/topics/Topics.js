import React, { Component } from 'react';
import * as api from '../../../api';
import { Link } from '@reach/router';
import LoadingSpinner from '../../layouts.js/LoadingSpinner';
import ErrorPage from '../ErrorPage';

class Topics extends Component {
  state = {
    topics: null,
    isLoading: true,
    error: null
  };
  render() {
    const { isLoading, topics, error } = this.state;
    if (error) return <ErrorPage error={error} />;
    if (isLoading) return <LoadingSpinner />;
    return (
      <div className="row mx-auto nightBg">
        {topics.map(topic => {
          return (
            <ul
              className=" row card mb-3 mx-auto nightBg text-white border border-light"
              topic={topic}
              key={topic.slug}
              style={{ width: '540px' }}
            >
              <li className="row no-gutters">
                <div className="col-md-4">
                  <img
                    src="https://pbs.twimg.com/profile_images/728482145082073088/lp46310N_400x400.jpg"
                    className="card img-fluid"
                    style={{ height: '10rem' }}
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <Link to={`/topics/${topic.slug}`}>
                      <h5 className="card-title">{topic.slug} Articles</h5>
                    </Link>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          );
        })}
      </div>
    );
  }

  componentDidMount = () => {
    this.fetchAllTopics();
  };

  fetchAllTopics = () => {
    api
      .getAllTopics()
      .then(topics => {
        this.setState({ topics, isLoading: false });
      })
      .catch(({ response: { data: { message }, status } }) => {
        this.setState({
          error: { message, status }
        });
      });
  };
}

export default Topics;
