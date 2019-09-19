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
    const { topics, isLoading, error } = this.state;
    if (error) return <ErrorPage error={error} />;
    if (isLoading) return <LoadingSpinner />;
    return (
      <div className="night">
        {topics.map(topic => {
          return (
            <ul topics={topics} key={topic.slug}>
              <Link to={`${topic.slug}`}>
                <p>{topic.slug}</p>
              </Link>
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
      .catch(error => {
        this.setState({ error });
      });
  };
}

export default Topics;
