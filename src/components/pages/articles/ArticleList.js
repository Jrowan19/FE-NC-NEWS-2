import React, { Component } from 'react';
import * as api from '../../../api';
import ArticleCard from './ArticleCard';
import LoadingSpinner from '../../layouts.js/LoadingSpinner';
import Sorter from '../../Sorter';
import ErrorPage from '../ErrorPage';
//import Pagination from '../../layouts.js/Pagination';

class ArticleList extends Component {
  state = {
    articles: null,
    sort_by: 'created_at',
    order: 'desc',
    article_id: '',
    isLoading: true,
    error: null
  };
  render() {
    const { articles, isLoading, error } = this.state;
    if (error) return <ErrorPage error={error} />;
    if (isLoading) return <LoadingSpinner />;
    return (
      <>
        <div className={this.props.handleDarkMode()}>
          <h3 className="text-white">Sort Articles! </h3>
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
    if (this.props.topic !== prevProps.topic) {
      this.fetchArticles();
    }
  };

  handlePageChange = pChange => {
    this.setState(({ p }) => ({ p: p + pChange }));
  };

  fetchArticles = (sort_by, order) => {
    const { topic, article_id } = this.props;

    api
      .getArticlesWithParams(topic, sort_by, order, article_id)
      .then(articles => {
        this.setState({ articles, isLoading: false });
      })
      .catch(({ response: { data: { message }, status } }) => {
        this.setState({
          error: { message, status }
        });
      });
  };
}

export default ArticleList;
