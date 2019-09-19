import React from 'react';
import { Link } from '@reach/router';
//import CommentsList from '../comments/CommentsList';

const ArticleCard = props => {
  const {
    title,
    author,
    topic,
    comment_count,
    article_id,
    created_at,
    votes
  } = props.article;
  return (
    <section className="row mt-3 ">
      <div
        className="card text-center mb-2 mx-auto border border-secondary"
        style={{ width: '40rem' }}
      >
        <div className="card-header text-uppercase">
          {author} - Date Posted - {new Date(created_at).toLocaleString()}
        </div>
        <div className="card-body">
          <h5 className="card-title">Title: {title}</h5>
          <p className="card-text"> {topic}</p>
          <p className="card-text">Votes: {votes}</p>
          <p className="card-text">Comment Count: {comment_count}</p>
          <Link
            to={`/article/${article_id}`}
            className="btn nav-background text-white"
          >
            View Article
          </Link>
        </div>
        <div className="card-footer ">
          {' '}
          <Link to={`/comments/${article_id}`}>View Comments </Link>{' '}
        </div>
      </div>
    </section>
  );
};

export default ArticleCard;
