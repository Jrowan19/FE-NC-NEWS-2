import React, { Component } from 'react';
import * as api from '../../../api';
import { Link, Router } from '@reach/router';
import LoadingSpinner from '../../layouts.js/LoadingSpinner';
import CommentsList from '../comments/CommentsList';

class SingleArticle extends Component {
  state = {
    article: [],
    isLoading: true,
    showComments: false
  };
  render() {
    const { article, isLoading, showComments } = this.state;
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
        <div className="bg-light single-div">
          <br />
          <section className="mx-auto">
            <div className="row mx-auto">
              <div className="col-sm-6 mx-auto">
                <div className="card ">
                  <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <h4>Author: {author}</h4>
                    <h3>{topic}</h3>
                    <p>{body}</p>
                    <p>Votes: {votes}</p>
                    <p>Comments: {comment_count}</p>
                    <p>Date Posted: {created_at}</p>
                    <button onClick={this.fetchComments}> See Comments</button>
                    {showComments && <CommentsList article_id={article_id} />}
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

  fetchComments = () => {
    this.setState(prevState => {
      return { showComments: !prevState.showComments };
    });
  };

  fetchSingleArticle = () => {
    api.getSingleArticle(`articles/${this.props.article_id}`).then(article => {
      console.log(article);
      this.setState({ article, isLoading: false });
    });
  };
}

export default SingleArticle;
