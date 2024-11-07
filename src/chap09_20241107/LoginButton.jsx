import React from "react";


function LoginButton(props)
{
    return(
        <button onClick={props.onClick}>회원가입</button>
    );
}

export default LoginButton;