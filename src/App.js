import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import ArticleList from './components/pages/articles/ArticleList';
import Topics from './components/pages/topics/Topics';
import { Router } from '@reach/router';
import NavBar from './components/layouts.js/NavBar';
import Home from './components/pages/Home';
import SingleArticle from './components/pages/articles/SingleArticle';
import CommentsList from './components/pages/comments/CommentsList';

class App extends Component {
  state = {
    username: 'jessjelly'
  };
  render() {
    const { username } = this.state;
    return (
      <div className="App">
        <NavBar username={username} handleUserChange={this.handleUserChange} />
        <Router>
          <Home path="/" />
          <ArticleList path="/articles" />
          <Topics path="/topics" />
          <ArticleList path="/topics/:topic" />
          <SingleArticle
            path="article/:article_id"
            loggedusernameInUser={username}
          />
          <CommentsList path="/comments/:article_id" username={username} />
          <CommentsList path="/comments/:comment_id" username={username} />
        </Router>
      </div>
    );
  }

  handleUserChange = e => {
    const { value } = e.target;
    this.setState({ username: value });
  };
}

export default App;
