import React, {useContext} from 'react';
import {UserContext} from '../../App';
function UseContextView(){
    const userContext = useContext(UserContext);
    return ( 
    <div>{userContext.pageTitle}</div>
    );
}
export default UseContextView;