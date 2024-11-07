import React, {useState} from "react";
import Toolbar from "./Toolbar";


function LandingPage(props)
{
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const onClickLogin = () =>
    {
        setIsLoggedIn(true);
    }

    const onClickLogout = () =>
    {
        setIsLoggedIn(false);
    }

    return(
        <div>
            <Toolbar isLoggedIn = {isLoggedIn} onClickLogin={onClickLogin}
            onClickLogout = {onClickLogout}/>
            <div style={{padding : 16}}>
                💨바람의 나라 클래식 메이플 월드로 만나요💨
            </div>
        </div>
    );
}


export default LandingPage;