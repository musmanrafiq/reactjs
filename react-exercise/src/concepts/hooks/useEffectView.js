import React, {useState, useEffect} from 'react';

function UseEffectView() {

    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState([]);

    function updateCounter(){
        const updateCount = counter + 1;
        return setCounter(updateCount);
    }

    useEffect(() => 
    {
        document.title = 'Page count is'+counter;
        fetch('http://localhost:31962/api/values', {
            method: "Get",
        }).then((resp)=> {
            return resp.json() 
        }).then((data) => {
            setUsers(data);
        }).catch((errors) => {
            console.log(errors);
        })

    }, false);
    return(
    <div>
        <p>This is users list</p>
        <button onClick={updateCounter}>Update</button>
        <br />
        <ul>
        { users.map((item) => {
            return <li>Name is :{item.name} and email is {item.email}</li>
        })}
        </ul>
    </div>
    );
}

export default UseEffectView;