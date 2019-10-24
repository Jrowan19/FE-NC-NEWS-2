import React from 'react';
import { Planet } from 'react-kawaii';

const ErrorPage = ({ error: { status, message } }) => {
  return (
    <h1 className="text-white bg-dark" style={{ height: '40rem' }}>
      Oh Snap! {status} {message}
      <Planet size={200} mood="blissful" color="#FDA7DC" />;
    </h1>
  );
};

export default ErrorPage;
