const Reels = () => {
  return (
    <div className="reels-wrapper">
      <div class="ratio ratio-16x9">
        <iframe
          src="https://www.youtube.com/embed/vlDzYIIOYmM"
          title="YouTube video"
          style={{ width: "400px", height: "600px" }}
        ></iframe>
      </div>
    </div>
  );
};

export default Reels;
