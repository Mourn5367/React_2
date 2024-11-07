
import React from "react";
import {UserGreeting, GuestGreeting} from "./UserGreeting";

function Greeting(props)
{
    const isLoggedIn = props.isLoggedIn;

    if(isLoggedIn)
    {
        return <UserGreeting/>;
    }
    else
    {
        return <GuestGreeting/>
    }

}

export default Greeting;