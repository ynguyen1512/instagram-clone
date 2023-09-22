import React, { useState } from "react";
// import Modal from "./Modal";
import "./Search.scss";
import { Avatar } from "@mui/material";
import { Button, Container, Modal } from "react-bootstrap";
import { Form } from "react-router-dom";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const Search = (props) => {
  const { setShowSearchBar, showSearchBar } = props;
  const handleShow = () => setShowSearchBar(true);
  const handleClose = () => {
    setShowSearchBar(false);
  };
  return (
    <Modal show={showSearchBar} onHide={handleClose}>
      <div className="search-wrapper">
        <div className="search-title">
          <span>Search</span>
        </div>
        <div className="search-input-wrapper">
          <input className="search-input" placeholder="Search" />
        </div>
        <hr />
        <div className="search-desc">
          <span>Recent</span>
          <span className="search-desc__clear">Clear all</span>
        </div>
        <div className="search-users">
          <Avatar className="search-user__avt" />
          <div className="search-user__info">
            <span>kaity.linhh</span>
            <span>Linh Hoang</span>
          </div>
          <div className="search-user__close">
            <CloseOutlinedIcon />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Search;
