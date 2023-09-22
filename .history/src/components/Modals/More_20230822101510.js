import { Modal } from "@mui/material";
import MoreFeatures from "./MoreFeatures";

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
      <MoreFeatures />
    </Modal>
  );
}

export default More;
