import React from 'react';
import _ from 'lodash';

const Pagination = props => {
  const { itemsCount, pageSize } = props;

  const pagesCount = itemsCount / pageSize;
  const pages = _.range(1, pagesCount + 1);

  return (
    <nav aria-label="Page navigation example mx-auto">
      <ul class="pagination mx-auto">
        {pages.map(page => (
          <li className="page-item  " key={page}>
            <a className="page-link">{page}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
