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
      <div className="bg-dark mx-auto row">
        <div className="container bg-dark mx-auto row" style={{ height: 35 }}>
          <div className="row">
            <div className="col"></div>
          </div>
        </div>
        <div className=" card row mx-auto bg-dark">
          {topics.map(topic => {
            return (
              <ul
                className=" row card mb-3 bg-dark text-white border border-primary mx-auto"
                topic={topic}
                key={topic.slug}
              >
                <li className="row no-gutters bg-dark">
                  <div className="card-body bg-dark">
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
                        src="https://www.iamexpat.nl/sites/default/files/styles/article--full/public/vegan-restaurants-amsterdam.jpg?itok=faMnR2LO"
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
