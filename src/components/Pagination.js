import React from 'react';
import { Link } from 'gatsby';

const Pagination = ({ currentPage, numPages, basePath }) => {
  return (
    <div className="pagination">
      {currentPage > 1 && (
        <Link to={currentPage === 2 ? basePath : `${basePath}/${currentPage - 1}`}>
          &lt;&lt; 前へ
        </Link>
      )}
      
      {/* ページ番号を表示 */}
      {Array.from({ length: numPages }, (_, i) => (
        <Link
          key={`pagination-link${i + 1}`}
          to={i === 0 ? basePath : `${basePath}/${i + 1}`}
          className={i + 1 === currentPage ? "current" : ""}
        >
          {i + 1}
        </Link>
      ))}

      {currentPage < numPages && (
        <Link to={`${basePath}/${currentPage + 1}`}>
          次へ &gt;&gt;
        </Link>
      )}
    </div>
  );
};

export default Pagination;
