import React, {useState} from "react";
import button_1 from "../chap04_20240905/Button_1";

function ConfirmButtonFunction(props)
{

    const [isConfirmed, setIsConfirmed] = useState(false);

    function handleConfirm()
    {
       setIsConfirmed(previsConfirmed => !previsConfirmed);
    }
    function handleConfirmReset()
    {
        setIsConfirmed(previsConfirmed => !previsConfirmed);
    }
    return(
        <div>
        <button onClick={handleConfirm} disabled={isConfirmed}>
            Confirm Button {isConfirmed? "확인됨":"확인하기"}
        </button>
        <button onClick={handleConfirmReset} disabled={!isConfirmed}>
                Confirm Button {isConfirmed? "리셋하기":""}
        </button>
        </div>
    )


}


export default ConfirmButtonFunction