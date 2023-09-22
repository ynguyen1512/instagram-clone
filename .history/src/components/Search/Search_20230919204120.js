import React, { useState } from "react";
// import Modal from "./Modal";
import "./Search.scss";
import { Avatar } from "@mui/material";
import { Button, Container, Modal } from "react-bootstrap";
import { Form } from "react-router-dom";

const Search = (props) => {
  const { show, setShow } = props;

  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
  };
  //   const openModal = () => {
  //     setIsModalOpen(true);
  //   };

  //   const closeModal = () => {
  //     setIsModalOpen(false);
  //   };

  return (
    <Modal show={show} onHide={handleClose}>
      {/* <div id="search-wrapper">
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
      </div> */}
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
    </Modal>
    // <Modal
    //   show={show}
    //   onHide={handleClose}
    //   dialogClassName="modal-90w"
    //   aria-labelledby="example-custom-modal-styling-title"
    //   centered
    //   className="modal-add-post"
    // >
    //   <Modal.Header class="bg-dark text-white">
    //     <Modal.Title id="example-custom-modal-styling-title">
    //       <p
    //         style={{
    //           fontSize: "16px",
    //           textAlign: "center",
    //           paddingTop: "10px",
    //         }}
    //       >
    //         Search
    //       </p>
    //     </Modal.Title>
    //   </Modal.Header>
    //   <Modal.Body style={{ backgroundColor: "#262626" }}>
    //     <Container>
    //       <Form>
    //         <Form.Group controlId="caption">
    //           <Form.Label>Caption</Form.Label>
    //           <Form.Control type="text" placeholder="Enter caption" />
    //         </Form.Group>

    //         {/* Add more Form.Group elements for other input fields */}
    //       </Form>
    //     </Container>
    //   </Modal.Body>
    // </Modal>
  );
};

export default Search;
