import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

class RespModal extends React.Component {
  state = {
    open: false
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <div>
        <button onClick={this.onOpenModal}>Open modal</button>
        <Modal open={open} onClose={this.onCloseModal} center>
          <h2>Simple centered modal</h2>
        </Modal>
      </div>
    );
  }
}

export default RespModal;
