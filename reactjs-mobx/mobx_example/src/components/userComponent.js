import { Component } from "react";
import { inject, observer } from "mobx-react";

class UserComponent extends Component {
  render() {
    return (
      <div>
        <p>User Name: {this.props.userStore.userName}</p>

        <button
          onClick={() => {
            this.props.userStore.setName();
          }}
          style={{ width: "10%" }}
        >
          Set Name
        </button>
      </div>
    );
  }
}

export default inject("userStore")(observer(UserComponent));
