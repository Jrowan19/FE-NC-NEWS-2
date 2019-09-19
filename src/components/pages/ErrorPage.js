import React from 'react';

const ErrorPage = ({ error: { status, message } }) => {
  return (
    <h1>
      Whoops.....{status} {message}
    </h1>
  );
};

export default ErrorPage;
