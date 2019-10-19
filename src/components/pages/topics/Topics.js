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
      <div className=" card row mx-auto nightBg" style={{ width: '20rem' }}>
        {topics.map(topic => {
          return (
            <ul
              className=" row card mb-3 nightBg text-white border border-light mx-auto"
              topic={topic}
              key={topic.slug}
              style={{ width: '540px' }}
            >
              <li className="row no-gutters">
                <div className="card-body">
                  {topic.slug === 'football' && (
                    <img
                      src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/08/29/09/liverpool-champions-league.jpg"
                      className="card img-fluid mx-auto"
                      style={{ height: '10rem' }}
                      alt="..."
                    />
                  )}
                  {topic.slug === 'coding' && (
                    <img
                      src="https://content.fortune.com/wp-content/uploads/2016/06/gettyimages-504662110.jpg"
                      className="card img-fluid mx-auto"
                      style={{ height: '10rem' }}
                      alt="..."
                    />
                  )}
                  {topic.slug === 'cooking' && (
                    <img
                      src="data:image/jpeg;base64,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"
                      className="card img-fluid mx-auto"
                      style={{ height: '10rem' }}
                      alt="..."
                    />
                  )}
                </div>
                <div className="col-md-8 mx-auto">
                  <div className="card-body mx-auto">
                    <Link to={`/topics/${topic.slug}`}>
                      <h5 className="card-title mx-auto">
                        {topic.slug} Articles
                      </h5>
                    </Link>
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
