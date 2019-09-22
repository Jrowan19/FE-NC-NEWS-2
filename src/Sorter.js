import React, { Component } from 'react';

class Sorter extends Component {
  state = {
    sort_by: 'created_at',
    order: 'desc'
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <select
            className="btn btn-outline-secondary dropdown-toggle mr-2 text-white "
            name="sort_by"
            onChange={this.handleChange}
          >
            <option value="created_at">Date</option>
            <option value="comment_count">Comments</option>
            <option value="votes">Votes</option>
          </select>
          <select
            className="btn btn-outline-secondary dropdown-toggle text-white"
            name="order"
            onChange={this.handleChange}
          >
            <option value="desc">Descending</option>
            <option value="asc">Ascending</option>
          </select>
          <button className="btn btn-outline-secondary btn-sm ml-2 text-white">
            Sort!
          </button>
        </form>
      </div>
    );
  }

  handleChange = event => {
    const { name, value } = event.target;
    console.log(name);
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    const { fetchArticles } = this.props;
    const { sort_by, order } = this.state;
    event.preventDefault();
    fetchArticles(sort_by, order);
  };
}

export default Sorter;
