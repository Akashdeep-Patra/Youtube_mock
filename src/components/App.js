import React from "react";
import SearchBar from "./SearchBar";
import "./SearchBar.css";
import Youtube from "../API/Youtube";
import VideoList from "./VideoList";
import VideoPlayer from "./VideoPlayer";
const key = "AIzaSyCb1OkmFb__bC6aHA1qdBbNcxaAdPyrFkI";

class App extends React.Component {
  state = { videos: [], selected_video: null };
  onVideoClick = (video) => {
    this.setState({ selected_video: video });
  };
  onSearch = async (text) => {
    const response = await Youtube.get("/search", {
      params: {
        q: text,
        type: "video",
        part: "snippet",
        maxResults: 50,
        key: key,
      },
    });
    this.setState({
      videos: response.data.items,
      selected_video: response.data.items[0],
    });
  };

  componentDidMount = () => {
    this.onSearch("Dogs");
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSearch={this.onSearch} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoPlayer video={this.state.selected_video} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoClick={this.onVideoClick}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
