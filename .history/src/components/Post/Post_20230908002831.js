const Post = (props) => {
  const [showModalCreateUser, setShowModalCreateUser] = useState(false);

  return (
    <>
      <ModalCreateUser
        show={showModalCreateUser}
        setShow={setShowModalCreateUser}
      />
    </>
  );
};

export default Post;
