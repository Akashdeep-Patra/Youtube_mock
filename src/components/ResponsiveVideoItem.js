import React from "react";

class ReasponsiveVideoItem extends React.Component {
  render = () => {
    const video = this.props.video;
    const title = video.snippet.title;
    return (
      <div
        className="item"
        onClick={() => this.props.onVideoClick(video)}
        style={{ cursor: "pointer", borderRadius: "8px" }}
      >
        <div className="image" style={{ borderRadius: "8px" }}>
          <img alt="" src={video.snippet.thumbnails.high.url} />
        </div>
        <div className="content">
          <div className="header">{video.channelTitle}</div>
          <div className="meta">
            <span>{title}</span>
          </div>
        </div>
      </div>
    );
  };
}

export default ReasponsiveVideoItem;
