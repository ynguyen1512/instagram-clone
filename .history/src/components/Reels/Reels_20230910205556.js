const Reels = () => {
  return (
    <div className="reels-wrapper">
      <div className="ratio ratio-16x9">
        <iframe
          src="https://www.youtube.com/embed/vlDzYIIOYmM"
          title="YouTube video"
          style={{ width: "400px", height: "600px" }}
        ></iframe>
      </div>
      <div className="reel-emotion"></div>
    </div>
  );
};

export default Reels;
