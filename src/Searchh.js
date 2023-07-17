import { useEffect, useState } from "react";
import React from "react";
import { FaSearch } from "react-icons/fa";
import "./Search.css";

function Searchh({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  

  return (
    <div className="main-container">
      <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYpymOp53j9MQN00axqAhKB54n744qVGoOYQ&usqp=CAU" />
      
      <input
        className="input_box"
        type="text"
        placeholder="Search Movie here"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <button className="search_btn" onClick={() => onSearch(searchQuery)}>
        <FaSearch />
      </button>
      
    </div>
  );
}

export default Searchh;
