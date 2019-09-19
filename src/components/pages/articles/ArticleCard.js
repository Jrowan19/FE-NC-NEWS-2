import React from 'react';
import { Link } from '@reach/router';

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
    <section className="row mt-3 card-padding">
      <div
        className="card text-center mb-2 mx-auto border border-light text-white nightBg"
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
          <Link to={`/article/${article_id}`}>
            <button className="btn btn-outline-primary"> View Article </button>
          </Link>
        </div>
        <div className="card-footer border border-white">
          {' '}
          <Link to={`/comments/${article_id}`}>
            <button className="btn btn-outline-primary"> View Comments </button>
          </Link>{' '}
        </div>
      </div>
    </section>
  );
};

export default ArticleCard;
