import React, { Component } from "react";
import {DebounceInput} from 'react-debounce-input';


class DebounceFieldView extends Component {

    state = {
      value: ''
  }



  render() {
    return (
      <div>
          <DebounceInput
          minLength={2}
          debounceTimeout={300}
          onChange={event => this.setState({value: event.target.value})} />
 
        <p>Value: {this.state.value}</p>
      </div>
    );
  }
}
export default DebounceFieldView;
