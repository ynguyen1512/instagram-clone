import React, { useState } from "react";
// import Modal from "./Modal";
import "./Search.scss";
import { Avatar } from "@mui/material";
import { Button, Container, Modal } from "react-bootstrap";
import { Form } from "react-router-dom";

const Search = () => {
  return (
    <div class="container d-flex justify-content-center">
      <div class="card mt-5 p-4">
        <div class="input-group mb-3">
          <input type="text" class="form-control" />
          <div class="input-group-append">
            <button class="btn btn-primary">
              <i class="fas fa-search"></i>
            </button>
          </div>
        </div>
        <span class="text mb-4">88 branding projects</span>
        <div class="d-flex flex-row justify-content-between mb-3">
          <div class="d-flex flex-column p-3">
            <p class="mb-1">Logo and marketing material design for Bakery</p>{" "}
            <small class="text-muted">8 days remaining</small>
          </div>
          <div class="price pt-3 pl-3">
            <span class="mb-2">Fixed</span>
            <h5>
              <span>&dollar;</span>1,500
            </h5>
          </div>
        </div>
        <div class="d-flex flex-row justify-content-between mx-1">
          <div class="d-flex flex-column p-3">
            <p class="mb-1">Need to create brand guidelines for my brand</p>{" "}
            <small class="text-muted">12 days remaining</small>
          </div>
          <div class="price pt-3 pl-3">
            <span class="mb-2">Hourly</span>
            <h5>
              <span>&dollar;</span>40
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
