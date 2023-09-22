import React, { useState } from "react";
// import Modal from "./Modal";
import "./Search.scss";
import { Avatar } from "@mui/material";
import { Button, Container, Modal } from "react-bootstrap";
import { Form } from "react-router-dom";

const Search = () => {
  return (
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
        <span>Clear all</span>
      </div>
      <div className="search-users">
        <Avatar />
        <div>
          <span>kaity.linhh</span>
          <span>Linh Hoang</span>
        </div>
        X
      </div>
    </div>
  );
};

export default Search;
