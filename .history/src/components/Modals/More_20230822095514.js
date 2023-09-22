import { Modal } from "@mui/material";

function More() {
  const handleOk = () => {
    setIsInviteMemberVisible(false);
  };

  const handleCancel = () => {
    setIsInviteMemberVisible(false);
  };
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
