import { Component } from "react";
import { observer, inject } from "mobx-react";

class UserComponent extends Component {
  render() {
    return (
      <div>
        <p>Count: {this.props.userStore.userName}</p>
        <button onClick={() => this.props.userStore.setName()}>Set Name</button>
      </div>
    );
  }
}

export default inject("userStore")(observer(UserComponent));
