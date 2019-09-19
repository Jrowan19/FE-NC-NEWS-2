import React, { Component } from 'react';

class CommentAdder extends Component {
  state = {
    body: ''
  };
  render() {
    const { body } = this.state;

    return (
      <form className="row mx-auto Home nightBg" onSubmit={this.handleSubmit}>
        <div className="form-group mx-auto nightBg" style={{ width: '50rem' }}>
          <span className="badge badge-light badge badge-lg mt-4 text-dark">
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
