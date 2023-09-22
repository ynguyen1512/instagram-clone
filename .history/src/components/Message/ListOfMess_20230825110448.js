import { Avatar } from "@mui/material";
import { useState } from "react";
import "./ListOfMess.scss";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import photo7 from "../../assets/img/me.jpg";
import photo8 from "../../assets/img/su.jpg";
import photo9 from "../../assets/img/suiu.jpg";

function ListOfMess() {
  const [usersMess, setUsersMess] = useState([
    {
      username: "pamyeuoi",
      avatar: process.env.PUBLIC_URL + photo9,
      desc: `Kaity sent an attachment.`,
    },
    {
      username: "kaity.linh",
      avatar: process.env.PUBLIC_URL + photo7,
      desc: "Kaity sent an attachment.",
    },
    {
      username: "jason.nguyen",
      avatar: process.env.PUBLIC_URL + photo8,
      desc: "Kaity sent an attachment.",
    },
  ]);
  return (
    <div className="list-mess-wrapper">
      <div className="list-mess-row1">
        <span className="mess__username">ynguyen.11</span>
        <EditNoteOutlinedIcon className="mess__edit" />
      </div>
      <div className="list-mess-row2">
        <span className="mess__desc">Messages</span>
        <span className="mess__desc2">Request</span>
      </div>
      <div className="list-mess-row3">
        {usersMess.map((userMess) => (
          <div className="mess-user">
            <Avatar className="mess__avt" src={userMess.avatar} />
            <div className="mess__info">
              <span className="mess__name">{userMess.username}</span>
              <span className="mess__content">{userMess.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListOfMess;
