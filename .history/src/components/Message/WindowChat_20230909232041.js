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
    <div className="d-flex flex-column vh-100" style={{ width: "100%" }}>
      <>
        <header className="d-flex justify-content-between align-items-center p-3 border-bottom">
          <div>
            <Avatar>Kaity</Avatar>
            {/* <span>this is room 1</span> */}
          </div>
          <div className="d-flex align-items-center">
            {/* <Button variant="light">Invite</Button> */}
            <Button
              style={{ backgroundColor: "#000", color: "#fff", border: "none" }}
            >
              <svg
                aria-label="Audio call"
                class="_ab6-"
                color="rgb(245, 245, 245)"
                fill="rgb(245, 245, 245)"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <path d="M18.227 22.912c-4.913 0-9.286-3.627-11.486-5.828C4.486 14.83.731 10.291.921 5.231a3.289 3.289 0 0 1 .908-2.138 17.116 17.116 0 0 1 1.865-1.71 2.307 2.307 0 0 1 3.004.174 13.283 13.283 0 0 1 3.658 5.325 2.551 2.551 0 0 1-.19 1.941l-.455.853a.463.463 0 0 0-.024.387 7.57 7.57 0 0 0 4.077 4.075.455.455 0 0 0 .386-.024l.853-.455a2.548 2.548 0 0 1 1.94-.19 13.278 13.278 0 0 1 5.326 3.658 2.309 2.309 0 0 1 .174 3.003 17.319 17.319 0 0 1-1.71 1.866 3.29 3.29 0 0 1-2.138.91 10.27 10.27 0 0 1-.368.006Zm-13.144-20a.27.27 0 0 0-.167.054A15.121 15.121 0 0 0 3.28 4.47a1.289 1.289 0 0 0-.36.836c-.161 4.301 3.21 8.34 5.235 10.364s6.06 5.403 10.366 5.236a1.284 1.284 0 0 0 .835-.36 15.217 15.217 0 0 0 1.504-1.637.324.324 0 0 0-.047-.41 11.62 11.62 0 0 0-4.457-3.119.545.545 0 0 0-.411.044l-.854.455a2.452 2.452 0 0 1-2.071.116 9.571 9.571 0 0 1-5.189-5.188 2.457 2.457 0 0 1 .115-2.071l.456-.855a.544.544 0 0 0 .043-.41 11.629 11.629 0 0 0-3.118-4.458.36.36 0 0 0-.244-.1Z"></path>
              </svg>
            </Button>
            <Button
              style={{ backgroundColor: "#000", color: "#fff", border: "none" }}
            >
              <svg
                aria-label="Video call"
                class="_ab6-"
                color="rgb(245, 245, 245)"
                fill="rgb(245, 245, 245)"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <rect
                  fill="none"
                  height="18"
                  rx="3"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  width="16.999"
                  x="1"
                  y="3"
                ></rect>
                <path
                  d="m17.999 9.146 2.495-2.256A1.5 1.5 0 0 1 23 8.003v7.994a1.5 1.5 0 0 1-2.506 1.113L18 14.854"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></path>
              </svg>
            </Button>
            <Button
              style={{ backgroundColor: "#000", color: "#fff", border: "none" }}
            >
              <svg
                aria-label="Conversation information"
                class="x1lliihq x1n2onr6"
                color="rgb(245, 245, 245)"
                fill="rgb(245, 245, 245)"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <title>Conversation information</title>
                <circle
                  cx="12.001"
                  cy="12.005"
                  fill="none"
                  r="10.5"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></circle>
                <circle cx="11.819" cy="7.709" r="1.25"></circle>
                <line
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  x1="10.569"
                  x2="13.432"
                  y1="16.777"
                  y2="16.777"
                ></line>
                <polyline
                  fill="none"
                  points="10.569 11.05 12 11.05 12 16.777"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></polyline>
              </svg>
            </Button>
          </div>
        </header>
        <div className="flex-grow-1 d-flex flex-column p-3">
          <div className="overflow-auto flex-grow-1">
            {/* Message */}
            <div class="d-flex flex-row justify-content-start mb-4">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                alt="avatar 1"
                style={{ width: "45px", height: "100%" }}
              />
              <div
                class="p-3 ms-3"
                style={{
                  borderRadius: "15px",
                  backgroundColor: "rgba(57, 192, 237,.2)",
                }}
              >
                <p class="small mb-0">
                  Hello and thank you for visiting MDBootstrap. Please click the
                  video below.
                </p>
              </div>
            </div>
            {/* message 2 */}
            <div class="d-flex flex-row justify-content-end mb-4">
              <div
                class="p-3 me-3 border"
                style={{
                  borderRadius: "15px",
                  backgroundColor: "#fbfbfb",
                  color: "#000",
                }}
              >
                <p class="small mb-0">Thank you, I really like your product.</p>
              </div>
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                alt="avatar 1"
                style={{ width: "45px", height: "100%" }}
              />
            </div>

            <div class="d-flex flex-row justify-content-start mb-4">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                alt="avatar 1"
                style={{ width: "45px", height: "100%" }}
              />
              <div class="ms-3" style={{ borderRadius: "15px" }}>
                <div class="bg-image">
                  <img
                    src="https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/354248193_1591789207975129_61096347069742372_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=QgWFhCYb8QkAX-HQ2zF&_nc_ht=scontent.fsgn5-11.fna&oh=00_AfAQ-Kypp3dwbtCoeL_bRSpV1g6ht8ctpNHt64wctgxHUg&oe=65017EF2"
                    style={{
                      borderRadius: "15px",
                      width: "145px",
                      height: "145px",
                    }}
                    alt="video"
                  />
                  <a href="#!">
                    <div class="mask"></div>
                  </a>
                </div>
              </div>
            </div>

            <div class="d-flex flex-row justify-content-start mb-4">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                alt="avatar 1"
                style={{ width: "45px", height: "100%" }}
              />
              <div
                class="p-3 ms-3"
                style={{
                  borderRadius: "15px",
                  backgroundColor: "rgba(57, 192, 237,.2)",
                }}
              >
                <p class="small mb-0">This is my bf</p>
              </div>
            </div>
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
              placeholder="Message..."
              autoComplete="off"
              style={{ backgroundColor: "#262626" }}
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
