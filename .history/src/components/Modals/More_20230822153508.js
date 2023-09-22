import { Modal } from "@mui/material";
import MoreFeatures from "./MoreFeatures";
import { useContext } from "react";
import { Navigation } from "@mui/icons-material";

function More() {
  const { isMoreVisible, setIsMoreVisible } = useContext(Navigation);
  const handleOk = () => {
    setIsMoreVisible(false);
  };

  const handleCancel = () => {
    setIsMoreVisible(false);
  };
  return (
    <div
      title="Invite members"
      visible={isMoreVisible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <MoreFeatures />
    </div>
  );
}

export default More;
