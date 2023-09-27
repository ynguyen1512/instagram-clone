import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./ModalCreatePost.scss";
import { Container, Form } from "react-bootstrap";

function ModalCreatePost(props) {
  const { show, setShow, addPost } = props;
  const [image, setImage] = useState("");
  const [previewImage, setPreviewImage] = useState("");
  const [showSecondModal, setShowSecondModal] = useState(false);

  // const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
    setShowSecondModal(false);
  };

  const handleNext = () => {
    setShowSecondModal(true);
  };

  const handleUploadImage = (event) => {
    if (event.target && event.target.files && event.target.files[0]) {
      setPreviewImage(URL.createObjectURL(event.target.files[0]));
      setImage(event.target.files[0]);
    } else {
      // setPreviewImage(null)
    }
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        centered
        className="modal-add-post"
      >
        <Modal.Header
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#262626",
          }}
        >
          <Modal.Title id="example-custom-modal-styling-title">
            <span style={{ color: "#fff", fontSize: "20px" }}>
              Create a new post
            </span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#262626",
            color: "fff",
          }}
        >
          <svg
            aria-label="Icon to represent media such as images or videos"
            class="x1lliihq x1n2onr6"
            color="#ccc"
            fill="rgb(245, 245, 245)"
            height="77"
            role="img"
            viewBox="0 0 97.6 77.3"
            width="96"
          >
            <title>Icon to represent media such as images or videos</title>
            <path
              d="M16.3 24h.3c2.8-.2 4.9-2.6 4.8-5.4-.2-2.8-2.6-4.9-5.4-4.8s-4.9 2.6-4.8 5.4c.1 2.7 2.4 4.8 5.1 4.8zm-2.4-7.2c.5-.6 1.3-1 2.1-1h.2c1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1 0-.8.3-1.5.8-2.1z"
              fill="currentColor"
            ></path>
            <path
              d="M84.7 18.4 58 16.9l-.2-3c-.3-5.7-5.2-10.1-11-9.8L12.9 6c-5.7.3-10.1 5.3-9.8 11L5 51v.8c.7 5.2 5.1 9.1 10.3 9.1h.6l21.7-1.2v.6c-.3 5.7 4 10.7 9.8 11l34 2h.6c5.5 0 10.1-4.3 10.4-9.8l2-34c.4-5.8-4-10.7-9.7-11.1zM7.2 10.8C8.7 9.1 10.8 8.1 13 8l34-1.9c4.6-.3 8.6 3.3 8.9 7.9l.2 2.8-5.3-.3c-5.7-.3-10.7 4-11 9.8l-.6 9.5-9.5 10.7c-.2.3-.6.4-1 .5-.4 0-.7-.1-1-.4l-7.8-7c-1.4-1.3-3.5-1.1-4.8.3L7 49 5.2 17c-.2-2.3.6-4.5 2-6.2zm8.7 48c-4.3.2-8.1-2.8-8.8-7.1l9.4-10.5c.2-.3.6-.4 1-.5.4 0 .7.1 1 .4l7.8 7c.7.6 1.6.9 2.5.9.9 0 1.7-.5 2.3-1.1l7.8-8.8-1.1 18.6-21.9 1.1zm76.5-29.5-2 34c-.3 4.6-4.3 8.2-8.9 7.9l-34-2c-4.6-.3-8.2-4.3-7.9-8.9l2-34c.3-4.4 3.9-7.9 8.4-7.9h.5l34 2c4.7.3 8.2 4.3 7.9 8.9z"
              fill="currentColor"
            ></path>
            <path
              d="M78.2 41.6 61.3 30.5c-2.1-1.4-4.9-.8-6.2 1.3-.4.7-.7 1.4-.7 2.2l-1.2 20.1c-.1 2.5 1.7 4.6 4.2 4.8h.3c.7 0 1.4-.2 2-.5l18-9c2.2-1.1 3.1-3.8 2-6-.4-.7-.9-1.3-1.5-1.8zm-1.4 6-18 9c-.4.2-.8.3-1.3.3-.4 0-.9-.2-1.2-.4-.7-.5-1.2-1.3-1.1-2.2l1.2-20.1c.1-.9.6-1.7 1.4-2.1.8-.4 1.7-.3 2.5.1L77 43.3c1.2.8 1.5 2.3.7 3.4-.2.4-.5.7-.9.9z"
              fill="currentColor"
            ></path>
          </svg>
          <p
            style={{
              color: "#ccc",
            }}
          >
            Drag photos and videos here
          </p>

          {/* form */}
          <form className="row justify-content-center align-items-center">
            <div className="col-md-12 text-center">
              <label className="form-label" htmlFor="labelUpload">
                <span
                  class="btn btn-primary btn-select"
                  style={{ backgroundColor: "#0095f6", fontSize: "12px" }}
                >
                  Select from computer
                </span>
              </label>
              <input
                type="file"
                hidden
                id="labelUpload"
                onChange={(event) => handleUploadImage(event)}
              />
            </div>

            <div className="col-md-12 img-preview text-center">
              {previewImage ? (
                <img src={previewImage} alt="preview-img" />
              ) : (
                <span>Preview Image</span>
              )}
            </div>
            <span
              class="btn btn-primary"
              style={{ backgroundColor: "#0095f6", fontSize: "12px" }}
              onClick={handleNext}
            >
              Next
            </span>
          </form>
        </Modal.Body>
      </Modal>

      {/* Second modal */}
      <Modal
        show={showSecondModal}
        onHide={handleClose}
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
              Create new post
            </p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "#262626" }}>
          <Container>
            {previewImage && (
              <img
                src={previewImage}
                alt="Selected"
                className="img-fluid"
                style={{ marginBottom: "20px" }}
              />
            )}

            <Form>
              <Form.Group controlId="caption">
                <Form.Label>Caption</Form.Label>
                <Form.Control
                  type="text"
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
                  placeholder="Enter caption"
                />
              </Form.Group>

              {/* Add more Form.Group elements for other input fields */}
            </Form>

            <Button
              variant="primary"
              style={{ backgroundColor: "#0095f6", fontSize: "12px" }}
              onClick={handleClose} // Close the second modal when finishing
            >
              Finish
            </Button>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalCreatePost;
