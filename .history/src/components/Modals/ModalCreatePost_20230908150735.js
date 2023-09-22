import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalCreatePost(props) {
  const { show, setShow } = props;
  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        centered
        style={{ borderRadius: "12px" }}
      >
        <Modal.Header
          style={{
            backgroundColor: "#262626",
          }}
        >
          <Modal.Title id="example-custom-modal-styling-title">
            <span style={{ color: "#fff" }}>Create a new post</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "#262626", color: "#adb5bd" }}>
          <p>
            Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
            commodi aspernatur enim, consectetur. Cumque deleniti temporibus
            ipsam atque a dolores quisquam quisquam adipisci possimus
            laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
            accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
            reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
            deleniti rem!
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalCreatePost;
