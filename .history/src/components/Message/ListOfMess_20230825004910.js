import { Avatar } from "@mui/material";
import "./ListOfMess.scss";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";

function ListOfMess() {
  return (
    <div className="list-mess-wrapper">
      <div className="list-mess-row1">
        <span className="mess__username">ynguyen.11</span>
        <EditNoteOutlinedIcon className="mess__edit" />
      </div>
      <div className="list-mess-row2">
        <span className="mess__desc">Message</span>
        <span className="mess__desc">Request</span>
      </div>
      <div className="list-mess-row3">
        <Avatar>J</Avatar>
        <div className="mess__info">
          <span className="mess__name">Kaity</span>
          <span className="mess__content">Kaity sent an attachment.</span>
        </div>
      </div>
    </div>
  );
}

export default ListOfMess;
