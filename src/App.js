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
import AllUsers from './components/pages/Users/AllUsers';

class App extends Component {
  state = {
    username: 'jessjelly',
    error: null
  };
  render() {
    const { username, error } = this.state;
    if (error) return <ErrorPage error={error} />;
    return (
      <div className="App">
        <NavBar username={username} handleUserChange={this.handleUserChange} />

        <Router>
          <Home path="/" username={username} />
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
          <AllUsers path="/users" username={username} />
        </Router>
      </div>
    );
  }

  handleUserChange = e => {
    const { value } = e.target;
    this.setState({ username: value });
  };

  // handleMode = () => {
  //   this.setState(prevState => ({ toggleDarkMode: !prevState.toggleDarkMode }));
  // };

  // handleDarkMode = () => {
  //   let darkMode = 'bg-';
  //   darkMode += this.state.toggleDarkMode === true ? 'dark' : 'light';
  //   return darkMode;
  // };

  // classesMode = () => {
  //   let classes = 'btn m-2 btn-';
  //   classes += this.state.toggleMode === true ? 'primary' : 'outline-danger';
  //   return classes;
  // };
}

export default App;
