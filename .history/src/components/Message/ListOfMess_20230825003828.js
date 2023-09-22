import "./ListOfMess.scss";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";

function ListOfMess() {
  return (
    <div className="list-mess-wrapper">
      <div className="list-mess-row1">
        <span className="mess__username">ynguyen.11</span>
        <button className="mess__edit-btn">
          <EditNoteOutlinedIcon />
        </button>
      </div>
      <div className="list-mess-row2"></div>
      <div className="list-mess-row3"></div>
    </div>
  );
}

export default ListOfMess;
