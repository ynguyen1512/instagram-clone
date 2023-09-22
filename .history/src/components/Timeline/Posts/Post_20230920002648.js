import { Avatar } from "@mui/material";
import "./Post.scss";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
const Post = ({ user, postImage, like, timestamp }) => {
  return (
    <div className="post">
      <div className="post__header">
        <div className="post__headerAuthor">
          <Avatar className="post__headerAvt">
            {user.charAt(0).toUpperCase()}
          </Avatar>
          {user} • <span>{timestamp}</span>
        </div>

        <MoreHorizOutlinedIcon />
      </div>
      <div className="post__image">
        <img src={postImage} />
      </div>
      <div className="post__footer">
        <div className="post__footerIcons">
          <div className="post__iconsMain">
            <FavoriteOutlinedIcon className="postIcon favoriteIcon" />
            <ModeCommentOutlinedIcon className="postIcon" />
            <SendOutlinedIcon className="postIcon" />
          </div>
          <div className="post__iconSave">
            <BookmarkBorderOutlinedIcon className="postIcon" />
          </div>
        </div>
        Liked by {like} people.
      </div>
    </div>
  );
};

export default Post;
