import React, { Component } from "react";
import imageExists from "image-exists";

class LoginView extends Component {
  constructor() {
    super();
    this.state = {
      profilePic:
        "https://www.gluu.org/wp-content/uploads/2019/01/securing-the-perimeter-52x75.png"
    };
  }

  componentDidMount() {
    const profilePic =
      "https://avatars0.githubusercontent.com/u/2999953?s=40&v=4";
    imageExists(profilePic, image => {
      if (image) {
        debugger;
        this.setState({ profilePic });
      }
    });
  }

  render() {
    return (
      <div>
        <p>This is a login component</p>
        <img src={this.state.profilePic} />
      </div>
    );
  }
}
export default LoginView;
