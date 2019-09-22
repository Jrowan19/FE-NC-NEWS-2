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
import SideBar from './components/layouts.js/SideBar';

class App extends Component {
  state = {
    username: 'jessjelly',
    toggleSideBar: true
  };
  render() {
    const { username, toggleSideBar } = this.state;
    return (
      <section className="App">
        <div className="row">
          <div className="col-4">
            <NavBar
              username={username}
              handleUserChange={this.handleUserChange}
            />
            <button
              className="sidebar-toggler btn btn-dark m-2 btn btn-lg mr-5"
              onClick={this.handleSideBar}
            >
              <i className="fas fa-bars"></i>
            </button>

            {toggleSideBar && <SideBar />}
          </div>
          <div className="col">
            <Router>
              <Home path="/" />
              <ArticleList path="/articles" />
              <Topics path="/topics" />
              <ArticleList path="/topics/:topic" />
              <SingleArticle path="article/:article_id" username={username} />

              <CommentsList
                path="/articles/:article_id/comments"
                username={username}
              />
              <Users path="/users/:username" username={username} />
              <CommentsList path="/comments/:article_id" username={username} />
              <ErrorPage default />
            </Router>
          </div>
          <div className="w-100"></div>
        </div>
      </section>
    );
  }

  handleUserChange = e => {
    const { value } = e.target;
    this.setState({ username: value });
  };

  handleSideBar = () => {
    this.setState(prevState => ({ toggleSideBar: !prevState.toggleSideBar }));
  };
}

export default App;
