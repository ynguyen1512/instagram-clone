import React, { useState } from "react";
// import Modal from "./Modal";
import "./Search.scss";
import { Avatar } from "@mui/material";

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
      <div className="search-title">Search</div>
      <div class="input-group rounded search-input">
        <input
          type="search"
          class="form-control rounded"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
        />
        <span class="input-group-text border-0" id="search-addon">
          <i class="fas fa-search"></i>
        </span>
      </div>
      <div className="search-desc">
        <span>Recent</span>
        <span>Clear all</span>
      </div>
      <div className="search-user">
        <Avatar>Kaity</Avatar>
        <div className="search-user-info">kaity.linh</div>
        <div className="search-close-btn">X</div>
      </div>
    </div>
  );
};

export default Search;
