import React from 'react';

const ErrorPage = ({ error: { status, message } }) => {
  return (
    <h1 className="error-bg text-white" style={{ height: '40rem' }}>
      Whoops.....{status} {message}
    </h1>
  );
};

export default ErrorPage;
