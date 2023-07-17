import { useEffect, useState } from "react";
import React from "react";
import { FaSearch } from "react-icons/fa";
import "./Search.css";

function Searchh({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  

  return (
    <div>
      <input
        type="text"
        placeholder="Search Movie here"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <button onClick={() => onSearch(searchQuery)}>
        <FaSearch />
      </button>
    </div>
  );
}

export default Searchh;
