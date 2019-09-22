import React, { Component } from 'react';
import * as api from '../api';

class Voting extends Component {
  state = {
    voteChange: 0
  };
  render() {
    const { votes, username, author } = this.props;
    const { voteChange } = this.state;

    return (
      <>
        <div className="row mx-auto">
          {username && username !== author && (
            <button
              className="bg-success"
              style={{ width: '5rem' }}
              onClick={() => this.updateVotes(1)}
              disabled={voteChange >= 1}
            >
              <i className="fas fa-thumbs-up"></i>
            </button>
          )}
         
          <button
            type="button"
            className="btn btn-outline-secondary btn-sm mx-auto text-white"
            style={{ width: '3rem' }}
          >
            <span className="badge badge-light badge-sm">
              {votes + voteChange}
            </span>
          </button>
          {username && username !== author && (
            <button
              className="bg-danger"
              style={{ width: '5rem' }}
              onClick={() => this.updateVotes(-1)}
              disabled={voteChange === -1}
            >
              <i className="fas fa-thumbs-down" />
            </button>
          )}
        </div>
      </>
    );
  }

  updateVotes = inc_votes => {
    console.log(inc_votes);
    const { article_id, comment_id } = this.props;
    api.updateVotes(article_id, comment_id, inc_votes).catch(error => {
      console.log(comment_id);
      this.setState(({ voteChange }) => {
        return { voteChange: voteChange - inc_votes };
      });
    });
    this.setState(({ voteChange }) => {
      return { voteChange: voteChange + inc_votes };
    });
  };
}

export default Voting;
