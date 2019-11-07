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
    error: null,
    paragraph:
      'Suspendisse nec massa vel sem pretium efficitur. Suspendisse potenti. Nullam ultrices dolor in nisi lobortis condimentum. Vivamus a vulputate risus, vitae rutrum orci. Massa vel sem pretium efficitur. Suspendisse potenti.'
  };
  render() {
    const { articles, isLoading, error, paragraph } = this.state;
    if (error) return <ErrorPage error={error} />;
    if (isLoading) return <LoadingSpinner />;

    return (
      <>
        <div className="bg-dark">
          <div className="container-fluid bg-dark" style={{ height: 35 }}>
            <div className="row">
              <div className="col"></div>
            </div>
          </div>
          <h3 className="text-white">ᔕOᖇT ᗩᖇTIᑕᒪEᔕ</h3>
          <Sorter fetchArticles={this.fetchArticles} />
          <div>
            <p className=" text-white">{paragraph.slice(0, 50)} cont.....</p>
          </div>
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
