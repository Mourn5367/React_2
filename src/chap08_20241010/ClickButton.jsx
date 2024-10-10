// 기본적인 클릭 이벤트 처리
// 버튼을 클릭하면 알림창이 표시되게 합니다.

import {useState} from "react";

function ClickButton()
{

    const handleClick = () =>
    {
        alert("경고");
    }

    return(
        <button onClick={handleClick}>
            경고문 출력
        </button>
    )


}

export default ClickButton