import React, { useState } from "react";
// import Modal from "./Modal";
import "./Search.scss";

const Search = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div id="search-wrapper">
      <img
        src="https://i.stack.imgur.com/qgNyF.png?s=328&g=1"
        width="100px"
        height="100px"
      />
    </div>
  );
};

export default Search;
