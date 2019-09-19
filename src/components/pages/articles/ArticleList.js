import React, { Component } from 'react';
import * as api from '../../../api';
import ArticleCard from './ArticleCard';
import LoadingSpinner from '../../layouts.js/LoadingSpinner';
import Sorter from '../../../Sorter';

class ArticleList extends Component {
  state = {
    articles: null,
    topic: '',
    sort_by: 'created_at',
    order: 'desc',
    article_id: '',
    isLoading: true,
    error: null
  };
  render() {
    const { articles, isLoading } = this.state;
    if (isLoading) return <LoadingSpinner />;
    return (
      <>
        <div className="bg-light">
          <h3>Sort Articles! </h3>
          <Sorter fetchArticles={this.fetchArticles} />
          {articles.map(article => {
            return <ArticleCard article={article} key={article.article_id} />;
          })}
        </div>
      </>
    );
  }

  componentDidMount = () => {
    this.fetchArticles();
  };

  componentDidUpdate = prevProps => {
    console.log(this.props);
    if (this.props.topic !== prevProps.topic) {
      this.fetchArticles();
    }
  };

  fetchArticles = () => {
    const { topic, sort_by, order, article_id } = this.props;
    api
      .getArticlesWithParams(topic, sort_by, order, article_id)
      .then(articles => {
        this.setState({ articles, isLoading: false });
      })
      .catch(error => {
        this.setState({ error });
      });
  };
}

export default ArticleList;
