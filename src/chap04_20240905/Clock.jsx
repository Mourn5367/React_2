import React from "react";


function Clock(props)
{
    return(
        <div>
            <h1>Hello,World</h1>
            <h2>It is {new Date().toLocaleTimeString()}</h2>
            <h2>It is {new Date().toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                fractionalSecondDigits: 3
            })}</h2>
        </div>
    );
}

export default Clock;