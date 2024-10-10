import React from "react";
import Button_1 from "./Button_1";

function ConfirmDialog(props)
{
    return(
        <div>
            <h1>내용을 확인하셨으면 확인 버튼을 눌러주세요</h1>
            <br/><br/>
            <Button_1 color ="green"> 확인 </Button_1>
            <Button_1 color ='red'> 취소 </Button_1>
        </div>
    )
}

export default ConfirmDialog;