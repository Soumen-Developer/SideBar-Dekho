import React from "react";
import "./css/SearchResult.css";

export const SearchResult = ({ result }) => {
  return (
    <div
      className="search-result"
      onClick={(e) => alert(`You selected ${result.name}!`)}
    >
      {result.name}
    </div>
  );
};
