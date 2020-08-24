import React, { Component } from "react";
import { DebounceInput } from "react-debounce-input";

class DebounceFieldView extends Component {
  state = {
    inputValue: ""
  };
  render() {
    return (
      <div>
        <DebounceInput
          minLength={3}
          debounceTimeout={500}
          onChange={event => this.setState({ inputValue: event.target.value })}
        />

        <p>{this.state.inputValue}</p>
      </div>
    );
  }
}
export default DebounceFieldView;
