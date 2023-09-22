import { Avatar } from "@mui/material";
import "./WindowChat.scss";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Button, Form, Input, Alert, Avatar, Tooltip } from "react-bootstrap";

import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardFooter,
  MDBIcon,
  MDBBtn,
  MDBScrollbar,
} from "mdb-react-ui-kit";

function WindowChat() {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="d-flex flex-column vh-100">
      {selectedRoom.id ? (
        <>
          <header className="d-flex justify-content-between align-items-center p-3 border-bottom">
            <div>
              <p className="fw-bold">{selectedRoom.name}</p>
              <span>{selectedRoom.description}</span>
            </div>
            <div className="d-flex align-items-center">
              <Button
                variant="light"
                onClick={() => setIsInviteMemberVisible(true)}
              >
                Invite
              </Button>
              <Button onClick={() => setIsVideoCallVisible(true)}>
                <i className="bi bi-camera-video-fill"></i>
              </Button>
              <AvatarGroup maxCount={2}>
                {members.map((member) => (
                  <Tooltip title={member.displayName} key={member.id}>
                    <Avatar src={member.photoURL}>
                      {member.photoURL
                        ? ""
                        : member.displayName?.charAt(0)?.toUpperCase()}
                    </Avatar>
                  </Tooltip>
                ))}
              </AvatarGroup>
            </div>
          </header>
          <div className="flex-grow-1 d-flex flex-column p-3">
            <div className="overflow-auto flex-grow-1" ref={messageListRef}>
              {messages.map((mes) => (
                <Message
                  key={mes.id}
                  text={mes.text}
                  photoURL={mes.photoURL}
                  displayName={mes.displayName}
                  createdAt={mes.createdAt}
                />
              ))}
            </div>
            <Form
              className="d-flex justify-content-between align-items-center border rounded-2"
              onSubmit={(e) => {
                e.preventDefault();
                handleOnSubmit();
              }}
            >
              <Form.Control
                className="border-0 flex-grow-1"
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Input your message..."
                autoComplete="off"
                ref={inputRef}
              />
              <Button type="submit" variant="primary" className="ms-2">
                Send
              </Button>
            </Form>
          </div>
        </>
      ) : (
        <Alert variant="info" onClose={() => {}} dismissible>
          Please choose your room
        </Alert>
      )}
    </div>
  );
}

export default WindowChat;
