import React from "react";
import { Link } from "gatsby";

export const Pagination = ({ totalCount, basePath }) => {
  const PER_PAGE = 30;

  const range = (start, end) => {
    if (end < start) {
      console.error(
        "Invalid range: end must be greater than or equal to start"
      );
      return [];
    }
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  const numPages = Math.ceil(totalCount / PER_PAGE);

  return (
    <ul className="page-nav">
      {range(1, numPages).map((number) => (
        <li key={number}>
          <Link to={`${basePath}/page/${number}`}>{number}</Link>
        </li>
      ))}
    </ul>
  );
};
