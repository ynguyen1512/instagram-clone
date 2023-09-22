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
    // <Modal>
    //   <div id="search-wrapper">
    //     <div className="search-title">Search</div>
    //     <div class="input-group rounded search-input">
    //       <input
    //         type="search"
    //         class="form-control rounded"
    //         placeholder="Search"
    //         aria-label="Search"
    //         aria-describedby="search-addon"
    //       />
    //       <span class="input-group-text border-0" id="search-addon">
    //         <i class="fas fa-search"></i>
    //       </span>
    //     </div>
    //     <div className="search-desc">
    //       <span>Recent</span>
    //       <span>Clear all</span>
    //     </div>
    //     <div className="search-user">
    //       <Avatar>Kaity</Avatar>
    //       <div className="search-user-info">kaity.linh</div>
    //       <div className="search-close-btn">X</div>
    //     </div>
    //   </div>
    // </Modal>
    <Modal
      //   show={showSecondModal}
      //   onHide={handleClose}
      dialogClassName="modal-90w"
      aria-labelledby="example-custom-modal-styling-title"
      centered
      className="modal-add-post"
    >
      <Modal.Header class="bg-dark text-white">
        <Modal.Title id="example-custom-modal-styling-title">
          <p
            style={{
              fontSize: "16px",
              textAlign: "center",
              paddingTop: "10px",
            }}
          >
            Search
          </p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: "#262626" }}>
        <Container>
          <Form>
            <Form.Group controlId="caption">
              <Form.Label>Caption</Form.Label>
              <Form.Control type="text" placeholder="Enter caption" />
            </Form.Group>

            {/* Add more Form.Group elements for other input fields */}
          </Form>
        </Container>
      </Modal.Body>
    </Modal>
  );
};

export default Search;
