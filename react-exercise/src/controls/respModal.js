import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

class RespModal extends React.Component {
  state = {
    hasOpen: false
  };

  onButtonClick = () => {
    this.setState({ hasOpen: true });
  };

  onCloseModal = () => {
    this.setState({ hasOpen: false });
  };
  render() {
    const { hasOpen } = this.state;
    return (
      <div>
        <button onClick={this.onButtonClick}>Lets Open Modal</button>
        <Modal open={hasOpen} onClose={this.onCloseModal} center>
          <p>This is modal paragraph</p>
        </Modal>
      </div>
    );
  }
}

export default RespModal;
