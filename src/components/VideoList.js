import React from "react";
//import VideoItem from "./VideoItem";
import ResponsiveVideoitem from "./ResponsiveVideoItem";
class VideoList extends React.Component {
  render() {
    const videos = this.props.videos;

    const renderedlist = videos.map((video) => {
      return (
        <ResponsiveVideoitem
          key={video.id.videoId}
          onVideoClick={this.props.onVideoClick}
          video={video}
        />
      );
    });
    return (
      <div
        className="ui items"
        style={{
          overflowY: "auto",
          position: "absolute",
          right: "5%",
          width: "80%",
          height: "100vh",
          marginRight: "5px",
        }}
      >
        {renderedlist}
      </div>
    );
  }
}
export default VideoList;
