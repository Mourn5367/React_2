import React from "react";

function Button(props)
{
    return(
        // <button style={{backgroundColor: props.color}}>
            <button className={`bg-${props.color}`}>
            <div>
                {props.children}
            </div>
        </button>
    )
}



export default Button;