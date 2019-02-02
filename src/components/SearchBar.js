import React from "react";

class SearchBar extends React.Component {
  state = {
    term: ""
  };

  // onInputChange(event) {
  //   console.log(event.target.value);
  // }

  // onInputClick() {
  //   console.log("Input was clicked");
  // }

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              // onClick={this.onInputClick}
              // onChange={event => console.log(event.target.value)}
              // onChange={this.onInputChange}
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
