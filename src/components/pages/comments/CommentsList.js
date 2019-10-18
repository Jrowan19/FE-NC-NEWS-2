import React, { Component } from 'react';
import * as api from '../../../api';
import LoadingSpinner from '../../layouts.js/LoadingSpinner';
import Voting from '../../Voting';
import { Link } from '@reach/router';
import CommentAdder from './CommentAdder';
import moment from 'moment';
import ErrorPage from '../ErrorPage';

class CommentsList extends Component {
  state = {
    comments: [],
    isLoading: true,
    error: null
  };
  render() {
    const { comments, isLoading, error } = this.state;
    if (error) return <ErrorPage error={error} />;
    const { username } = this.props;
    if (isLoading) return <LoadingSpinner />;
    return (
      <>
        <CommentAdder
          username={username}
          article_id={this.props.article_id}
          addComment={this.addComment}
        />
        <div>
          {comments.map(comment => {
            return (
              <section className="row mx-auto nightBg" key={comment.comment_id}>
                <div
                  className="card nightBg mx-auto border border-dark mb-2 text-white"
                  style={{ width: '50rem' }}
                >
                  <Link to={`/comments/${this.props.article_id}`}>
                    <h5 className="card-title text-white text-uppercase nav-background  active text-white border border-white">
                      {comment.author} Posted{' '}
                      {moment(comment.created_at).fromNow()}
                    </h5>
                  </Link>
                  <p className="card-title text-uppercase text-white" />
                  <p className="card-title text-uppercase text-white">
                    {comment.body}
                  </p>

                  <Voting
                    votes={comment.votes}
                    comment_id={comment.comment_id}
                    author={comment.author}
                    username={username}
                  />

                  {username === comment.author && (
                    <button
                      type="button"
                      className="btn btn-outline-danger btn-sm mx-auto mt-3"
                      style={{ width: '10rem' }}
                      onClick={() => {
                        if (
                          window.confirm(
                            'Are you sure you wish to delete this item?'
                          )
                        )
                          this.removeComment(comment.comment_id);
                      }}
                    >
                      {' '}
                      Delete Comment{' '}
                    </button>
                  )}
                </div>
              </section>
            );
          })}
        </div>
      </>
    );
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.comments !== this.state.comments) {
      api.getComments(this.props.article_id).then(article => {
        this.setState({ article, isLoading: false });
      });
    }
  }
  componentDidMount() {
    api.getComments(this.props.article_id).then(comments => {
      this.setState({ comments, isLoading: false });
    });
  }

  addComment = comment => {
    const { article_id, username } = this.props;
    api
      .postComment(article_id, comment, { username })
      .then(newComment => {
        this.setState(({ comments }) => {
          return { comments: [newComment, ...comments] };
        });
      })
      .catch(({ response: { data: { message }, status } }) => {
        this.setState({
          error: { message, status }
        });
      });
  };

  removeComment = comment_id => {
    api.deleteComment(comment_id);
    this.setState(({ comments }) => {
      return {
        comments: comments.filter(comment => comment.comment_id !== comment_id)
      };
    });
  };
}

export default CommentsList;
