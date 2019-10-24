import React, { Component } from 'react';

class CommentAdder extends Component {
  state = {
    body: ''
  };
  render() {
    const { body } = this.state;

    return (
      <form className="row mx-auto Home bg-dark" onSubmit={this.handleSubmit}>
        <div className="form-group mx-auto bg-dark" style={{ width: '50rem' }}>
          <span className="badge badge-light badge badge-lg mt-4 text-dark">
            Comments
          </span>

          <textarea
            className="form-control mt-1 bg-white border border-primary"
            style={{ height: '8rem' }}
            type="text"
            name="body"
            placeholder="Add comment here"
            id="body"
            minLength="1"
            required
            value={body}
            onChange={this.handleChange}
          />
          <button className="btn btn-secondary btn-sm">Add Comment</button>
        </div>
      </form>
    );
  }

  handleChange = event => {
    const { value } = event.target;
    this.setState({ body: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { body } = this.state;
    this.props.addComment(body);
  };
}

export default CommentAdder;
