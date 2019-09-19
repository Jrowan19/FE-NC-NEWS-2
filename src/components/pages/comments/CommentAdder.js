import React, { Component } from 'react';

class CommentAdder extends Component {
  state = {
    body: ''
  };
  render() {
    const { body } = this.state;

    return (
      <form className="row mx-auto Home bg-light" onSubmit={this.handleSubmit}>
        <div className="form-group mx-auto" style={{ width: '50rem' }}>
          <span className="badge badge-primary badge badge-lg mt-4">
            Comments
          </span>

          <textarea
            className="form-control mt-1 bg-white"
            style={{ height: '8rem' }}
            type="text"
            name="body"
            placeholder="Add comment here"
            id="body"
            minLength="1"
            required
            value={body}
            onChange={event => this.handleChange(event.target.value, 'body')}
          />
          <button className="btn btn-secondary btn-sm">Add Comment</button>
        </div>
      </form>
    );
  }

  handleChange = (text, value) => {
    this.setState({
      [value]: text
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { body } = this.state;
    //const { username, article_id } = this.props;
    this.props.addComment(body);
  };
}

export default CommentAdder;
