import React from 'react';
import { Link } from '@reach/router';
import moment from 'moment';

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
        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          <p className="card-text"> {topic}</p>
          <div className="card-header text-uppercase">
            {author} - Posted - {moment(created_at).fromNow()}
          </div>
          <p className="card-text">Votes: {votes}</p>
          <p className="card-text">Comments : {comment_count}</p>
          <Link to={`/article/${article_id}`}>
            <button className="btn btn-outline-primary"> View Article </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ArticleCard;
