import React, { Component } from 'react';
import * as api from '../../../api';
import { Link } from '@reach/router';
import LoadingSpinner from '../../layouts.js/LoadingSpinner';

class Topics extends Component {
  state = {
    topics: null,
    isLoading: true
  };
  render() {
    const { topics, isLoading } = this.state;
    if (isLoading) return <LoadingSpinner />;
    return (
      <div>
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
    api.getAllTopics().then(topics => {
      this.setState({ topics, isLoading: false });
    });
  };
}

export default Topics;
