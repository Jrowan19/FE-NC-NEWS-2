import React, { Component } from 'react';
import * as api from '../../../api';
import LoadingSpinner from '../../layouts.js/LoadingSpinner';
import CommentsList from '../comments/CommentsList';
import ErrorPage from '../ErrorPage';
import Voting from '../../Voting';
import moment from 'moment';

class SingleArticle extends Component {
  state = {
    article: [],
    isLoading: true,
    error: null,
    showComments: true
  };
  render() {
    const { article, isLoading, showComments, error } = this.state;
    const { username } = this.props;
    if (error) return <ErrorPage error={error} />;

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
        <div className="nightBg single-div single-art">
          <section className="mx-auto">
            <div className="row">
              <div className="col-sm-6 mx-auto">
                <div className="card">
                  <div className="card-body nightBg">
                    <h1 className="card-title text-white">{title}</h1>
                    <h4 className="text-white">Author: {author}</h4>
                    <h3 className="text-white">{topic}</h3>
                    <p className="text-white">{body}</p>
                    <p className="text-white">Votes: {votes}</p>
                    <p className="text-white">Comments: {comment_count}</p>
                    <p className="text-white">
                      Date Posted: {moment(created_at).fromNow()}
                    </p>
                    <Voting
                      votes={votes}
                      author={author}
                      username={username}
                      article_id={article_id}
                    />

                    <button
                      className="btn btn-outline-light"
                      onClick={this.fetchComments}
                    >
                      {' '}
                      Show Comments
                    </button>

                    {showComments && (
                      <CommentsList
                        article_id={article_id}
                        username={username}
                      />
                    )}
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

  componentDidUpdate = prevProps => {
    if (prevProps.votes !== this.props.votes) this.updateVotes();
  };

  fetchComments = () => {
    this.setState(prevState => {
      return { showComments: !prevState.showComments };
    });
  };

  componentDidMount() {
    api
      .getComments(this.props.article_id)
      .then(comments => {
        this.setState({ comments, isLoading: false });
      })
      .catch(error => {
        this.setState({ error });
      });
  }

  fetchSingleArticle = () => {
    api
      .getSingleArticle(`articles/${this.props.article_id}`)
      .then(article => {
      
        this.setState({ article, isLoading: false });
      })
      .catch(({ response: { data: { message }, status } }) => {
        this.setState({
          error: { message, status }
        });
      });
  };
}

export default SingleArticle;
