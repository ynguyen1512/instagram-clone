import { Avatar } from "@mui/material";
import "./WindowChat.scss";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Button, Form, Input, Alert, Tooltip } from "react-bootstrap";
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

function WindowChat({ selectedUser, onClose }) {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="d-flex flex-column vh-100 vw-100">
      <>
        <header className="d-flex justify-content-between align-items-center border-bottom">
          <div>
            <Avatar>Kaity</Avatar>
            {/* <span>this is room 1</span> */}
          </div>
          <div className="d-flex align-items-center">
            <Button variant="light">Invite</Button>
            {/* <AvatarGroup maxCount={2}>
                {members.map((member) => (
                  <Tooltip title={member.displayName} key={member.id}>
                    <Avatar src={member.photoURL}>
                      {member.photoURL
                        ? ""
                        : member.displayName?.charAt(0)?.toUpperCase()}
                    </Avatar>
                  </Tooltip>
                ))}
              </AvatarGroup> */}
          </div>
        </header>
        <div className="flex-grow-1 d-flex flex-column p-3">
          <div className="overflow-auto flex-grow-1">
            {/* {messages.map((mes) => (
                <Message
                  key={mes.id}
                  text={mes.text}
                  photoURL={mes.photoURL}
                  displayName={mes.displayName}
                  createdAt={mes.createdAt}
                />
              ))} */}
            message here
          </div>
          <Form
            className="d-flex justify-content-between align-items-center border rounded-2"
            onSubmit={(e) => {
              e.preventDefault();
              // handleOnSubmit();
            }}
          >
            <Form.Control
              className="border-0 flex-grow-1"
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Input your message..."
              autoComplete="off"
              // ref={inputRef}
            />
            <Button type="submit" variant="primary" className="ms-2">
              Send
            </Button>
          </Form>
        </div>
      </>
    </div>
  );
}

export default WindowChat;
