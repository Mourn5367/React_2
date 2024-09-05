import React from "react";
import Button from "./Button";

function ConfirmDialog(props)
{
    return(
        <div>
            <h1>내용을 확인하셨으면 확인 버튼을 눌러주세요</h1>
            <br/><br/>
            <Button color ="green"> 확인 </Button>
            <Button color ='red'> 취소 </Button>
        </div>
    )
}

export default ConfirmDialog;