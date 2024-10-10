import React from "react";

function InputTest()
{
    function handleChange(event)
    {
        console.log('입력된 값: ',event.target.value);
        //console.log(`입력된 값: ${event.target.value}`);
    }

    return(
        //placehoder 입력하면 사라지는 힌트
        <input type="text" onChange={handleChange} placeholder = "임의의 문자열을 입력해 주세요"/>
    );
}

export default InputTest