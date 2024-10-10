import {useState} from "react";

function ToggleFunc()
{
    const [isToggleOn, setIsToggleOn] = useState(true);
    
    // 첫번째 방법: 함수 컴포넌트 내에 함수로 정의

    // function handleClick()
    // {
    //     setIsToggleOn((isToggleOn) => !isToggleOn);
    // }

    const handleClick = () => {
        setIsToggleOn((isToggleOn) => !isToggleOn);
    }

    let buttonText;
    if(isToggleOn)
        buttonText = "켜짐";
    else
        buttonText = "꺼짐";

    return(
        <button onClick={handleClick}>
            {isToggleOn ? "켜짐" : "꺼짐"}
            {buttonText}
        </button>
    )
}

export default ToggleFunc
