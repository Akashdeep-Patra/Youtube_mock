import React from "react";
import "./SearchBar.css";
class SearchBar extends React.Component {
  state = { text: "" };
  onInputChange = (event) => {
    this.setState({ text: event.target.value });
  };
  onHitEnter = (event) => {
    event.preventDefault();
    this.props.onSearch(this.state.text);
  };
  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onHitEnter} className="ui form">
          <div className="field">
            <input
              placeholder="Video Search"
              onChange={this.onInputChange}
              value={this.state.text}
              type="search"
            ></input>
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
