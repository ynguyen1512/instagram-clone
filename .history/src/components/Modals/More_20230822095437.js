import { Modal } from "@mui/material";

function More() {
  return (
    <Modal
      title="Invite members"
      visible={isInviteMemberVisible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      Modal
    </Modal>
  );
}

export default More;
