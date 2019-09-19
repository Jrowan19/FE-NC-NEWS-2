import React, { Component } from 'react';
import * as api from '../../../api';
import { Link, Router } from '@reach/router';
import LoadingSpinner from '../../layouts.js/LoadingSpinner';

class SingleArticle extends Component {
  state = {
    article: [],
    isLoading: true
  };
  render() {
    const { article, isLoading } = this.state;
    if (isLoading) return <LoadingSpinner />;
    const {
      author,
      body,
      comment_count,
      created_at,
      title,
      topic,
      votes,
      article_id
    } = article;

    return (
      <>
        <div className="bg-light">
          <br />
          <section className="mx-auto">
            <div className="row mx-auto">
              <div className="col-sm-6 mx-auto">
                <div className="card ">
                  <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <h4>Author: {author}</h4>
                    <h3>{topic}</h3>
                    <p>{body}</p>
                    <p>{votes}</p>
                    <p>{comment_count}</p>
                    <Link
                      to={`/comments/${article_id}`}
                      className="btn btn-primary"
                    >
                      See Comments
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }

  componentDidMount = () => {
    this.fetchSingleArticle();
  };

  fetchSingleArticle = () => {
    api.getSingleArticle(`articles/${this.props.article_id}`).then(article => {
      console.log(article);
      this.setState({ article, isLoading: false });
    });
  };
}

export default SingleArticle;
