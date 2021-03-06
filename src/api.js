import axios from 'axios';

const request = axios.create({
  baseURL: 'https://john-rowan-news.herokuapp.com/api'
});

const baseUrl = 'https://john-rowan-news.herokuapp.com/api';

export const getData = URL => {
  return request.get(URL).then(({ data }) => {
    return data;
  });
};

export const getArticlesWithParams = (topic, sort_by, order, article_id) => {
  const url = '/articles';
  return request
    .get(url, {
      params: {
        topic,
        sort_by,
        order,
        article_id
      }
    })
    .then(({ data: { articles } }) => {
      return articles;
    });
};

export const getAllTopics = () => {
  const url = '/topics';
  return request.get(url).then(({ data: { topics } }) => {
    return topics;
  });
};

export const getSingleArticle = endpoint => {
  const url = `/${endpoint}`;
  return request.get(url).then(({ data: { article } }) => {
    return article;
  });
};

export const getComments = article_id => {
  let url = `/articles/${article_id}/comments`;
  return request.get(url).then(({ data: { comments } }) => {
    return comments;
  });
};

export const postComment = (article_id, body, { username }) => {
  const url = `/articles/${article_id}/comments`;
  return request
    .post(url, {
      body,
      username
    })
    .then(({ data: { comment } }) => {
      return comment;
    });
};

export const deleteComment = comment_id => {
  return request
    .delete(`/comments/${comment_id}`, { comment_id })
    .then(({ data }) => {
      return data.comment;
    });
};

export const deleteUser = username => {
  return request.delete(`/users/${username}`, { username }).then(({ data }) => {
    console.log(data);
    return data.user;
  });
};
export const getUser = endpoint => {
  const url = `/users/${endpoint}`;
  return request.get(url).then(({ data: { users } }) => {
    return users;
  });
};

export const postUser = newUser => {
  return request.post('/users', newUser).then(({ data: { user } }) => {
    return user;
  });
};

export const updateVotes = (article_id, comment_id, inc_votes) => {
  const URL = article_id
    ? `${baseUrl}/articles/${article_id}`
    : `${baseUrl}/comments/${comment_id}`;
  return axios.patch(URL, { inc_votes });
};

export const getAllUsers = () => {
  const url = `/users`;
  return request.get(url).then(({ data: { users } }) => {
    return users;
  });
};
