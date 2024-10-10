import React, {useState} from "react";


function Counter()
{
    // 이름, 메소드
    const [plusCount, setPlusCount] = useState(0);
    const [minusCount, setMinusCount] =useState(0);
    function handleCount(type)
    {
        if(type === "plus")
        setPlusCount(prevState => prevState + 1);
        else if (type === "minus")
        setMinusCount(prevState => prevState + 1)
    }

    return(
        <div>
            <p>{plusCount} 😄 개추</p>
            <button onClick={() => handleCount("plus")}> 개추하기</button>
            <p>{minusCount} 😭 비추</p>
            <button onClick={() => handleCount("minus")}> 비추하기</button>
        </div>

    )

}

export default Counter