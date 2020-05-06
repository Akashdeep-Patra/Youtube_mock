import React from "react";

const VideoPlayer = ({ video }) => {
  if (!video) {
    return <div>Loading.....</div>;
  }
  const vid_src = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div
      style={{
        position: "absolute",
        leftt: "10px",
        marginLeft: "5px",
      }}
    >
      <div className="ui embed" style={{ borderRadius: "8px" }}>
        <iframe
          src={vid_src}
          title="Video Player"
          allowFullScreen="True"
        ></iframe>
      </div>
      <div className="ui items">
        <div className="item">
          <div className="ui segment">
            <div className="header">{video.snippet.title}</div>
            <div className="description">
              <p>{video.snippet.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
