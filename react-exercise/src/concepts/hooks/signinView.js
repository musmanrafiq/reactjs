import React, {useState} from 'react';

function SigninView(){
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    function setUserNameFunc(event){
        const username = event.target.value;
        return setUserName(username);
    }

     function setPasswordFunc(event){
        const username = event.target.value;
        return setPassword(username);
    }
    return (
        <div>
            <p>Sign in Form</p>
                <br />
                <input name='username' value={username} onChange = {setUserNameFunc}/>
                <br />
                <input type='password' name='password' value={password} onChange = {setPasswordFunc}  />
                <br/>
                <button>Sign in</button>
        </div>
    );
}

export default SigninView;