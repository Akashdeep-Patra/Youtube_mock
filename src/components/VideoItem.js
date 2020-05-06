import React from "react";

class VideoItem extends React.Component {
  render = () => {
    const video = this.props.video;
    const title = video.snippet.title;
    return (
      <div
        className="item"
        onClick={() => this.props.onVideoClick(video)}
        style={{
          cursor: "pointer",
          display: "inline-block",
          borderRadius: "8px",
        }}
      >
        <div className="ui  card" style={{ borderRadius: "8px" }}>
          <div className="image">
            <img alt="" src={video.snippet.thumbnails.high.url} />
          </div>
          <div className="content">
            <div className="header">{video.channelTitle}</div>
            <div className="description">{title}</div>
          </div>
        </div>
      </div>
    );
  };
}

export default VideoItem;
