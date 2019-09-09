import React, { Component } from 'react';

class SigninView extends Component {

    constructor(props) {
        super(props);
        this.state = { username: '', password: '' }
    }

    onUsernameChange = (event) => {
        const username = event.target.value;
        this.setState({ username });
    }

    onPasswordChange = (event) => {
        const password = event.target.value;
        this.setState({ password });
    }
    onSignin = () => {
        const {username, password} = this.state;
        alert('Your username is : '+username + ' and password is : '+ password);
    }

    render() { 
        const { username, password } = this.state;

        return (
            <div>
                <p>Sign in Form</p>
                <br />
                <input name='username' value={username} onChange={this.onUsernameChange} />
                <br />
                <input type='password' name='password' value={password} onChange={this.onPasswordChange} />
                <br/>
                <button onClick={this.onSignin}>Sign in</button>
            </div>
          );
    }
}
 
export default SigninView;