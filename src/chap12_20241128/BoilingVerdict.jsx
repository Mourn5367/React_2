import React from "react";

function BoilingVerdict(props)
{

    if (props.celsius >= 100)
    {
        return <p>물이 끓고 있습니다...♨</p>
    }
    else if (props.celsius < 0)
    {
        return <p>물이 얼었습니다...🧊</p>
    }
    else
    {
        return <p>물은 답을 알고있다...</p>
    }

}

export default BoilingVerdict;