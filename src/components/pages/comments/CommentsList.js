import React, { Component } from 'react';
import * as api from '../../../api';
import LoadingSpinner from '../../layouts.js/LoadingSpinner';
import Voting from '../../Voting';
import { Link } from '@reach/router';
import CommentAdder from './CommentAdder';

class CommentsList extends Component {
  state = {
    comments: [],
    isLoading: true,
    error: null
  };
  render() {
    const { comments, isLoading, error } = this.state;
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
              <section
                className="row mx-auto bg-light"
                key={comment.comment_id}
              >
                <div
                  className="card bg-light mx-auto border border-dark mb-2"
                  style={{ width: '50rem' }}
                >
                  <Link to={`/comments/${this.props.article_id}`}>
                    <h3 className="card-title text-white text-uppercase nav-background  active text-white border border-white">
                      {comment.author}{' '}
                      {new Date(comment.created_at).toLocaleString()}
                    </h3>
                  </Link>
                  <p className="card-title text-uppercase text-dark" />
                  <p className="card-title text-uppercase text-dark">
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
                      className="btn btn-danger btn-sm mx-auto"
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
      .catch(error => {
        this.setState({ error });
      });
  };

  removeComment = comment_id => {
    console.log(comment_id, 'this is me ');
    api.deleteComment(comment_id);
    this.setState(({ comments }) => {
      return {
        comments: comments.filter(comment => comment.comment_id !== comment_id)
      };
    });
  };
}

export default CommentsList;