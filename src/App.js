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
import ErrorPage from './components/pages/ErrorPage';
import Users from './components/pages/Users/Users';

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
          <ArticleList path="/articles" username={username} />
          <Topics path="/topics" username={username} />
          <ArticleList path="/topics/:topic" username={username} />
          <SingleArticle path="article/:article_id" username={username} />

          <CommentsList
            path="/articles/:article_id/comments"
            username={username}
          />
          <Users path="/users/:username" username={username} />
          <ErrorPage
            default
            error={{ message: 'route not found', status: 404 }}
          />
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
