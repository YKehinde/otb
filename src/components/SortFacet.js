import React from 'react';
import './SortFacet.css';

const SortFacet = props => {
  const { sortKey, setSortKey, label, className } = props;
  return (
    <button
      className={`sort-button ${className}`}
      onClick={() => {
        setSortKey(sortKey);
      }}
    >
      sort <span>{sortKey != 'name' ? `by ${label}` : label}</span>
    </button>
  );
};

export default SortFacet;
