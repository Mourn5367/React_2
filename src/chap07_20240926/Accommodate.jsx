import React, {useState,useEffect} from "react";
import useCounter from "./useCounter";


const MAX_CAPACITY = 10;

function Accommodate(props)
{
    const [isFull, setIsFull] = useState(false);
    const [count, increaseCount,decreaseCount] = useCounter(0);
    
    // Mount (컴포넌트가 생성) 되었을때, Update 되었을 때
    useEffect(() => {
     console.log(`count: ${count}, isFull: ${isFull}========`)
     console.log(`useEffect 실행됨`)
    });

    useEffect(() =>{
        setIsFull(count >= MAX_CAPACITY);
        console.log(`Current count value: ${count}`);
    },[count]);

    return (
        <div style={{padding: 16}} >
        <p>{`총 ${count}명이 건강해지고 있는 중입니다.`}</p>
            <button onClick={increaseCount} disabled={isFull}>건강해지기</button>
            <button onClick={decreaseCount}>과징금 먹이기</button>
            {isFull &&(  <div style={{color : "red"}}> <p>모든 쌀숭이들이 건강해지고 있는 중입니다.</p> <img src="../image/God.png" style={{ width: "100px", height: "100px"}}/></div>)}
        </div>
    )
}




export default Accommodate;