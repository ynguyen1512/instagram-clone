import { useState } from "react";

const Post = (props) => {
  const [showModalCreateUser, setShowModalCreateUser] = useState(false);

  return (
    <>
      <div className="btn-add-new">
        <button
          className="btn btn-light"
          onClick={() => setShowModalCreateUser(true)}
        ></button>
      </div>
      <ModalCreateUser
        show={showModalCreateUser}
        setShow={setShowModalCreateUser}
      />
    </>
  );
};

export default Post;
