import { useState } from "react";

const Post = (props) => {
  return (
    <>
      <div className="btn-add-new">
        <button
          className="btn btn-light"
          onClick={() => setShowModalCreateUser(true)}
        ></button>
      </div>
    </>
  );
};

export default Post;
