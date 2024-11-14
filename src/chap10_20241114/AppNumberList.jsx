import React from "react";



function NumberList(props)
{
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        <li key={number.toString()}>{number}</li>
    );

    return(
        <div>
            {listItems}
        </div>
    )
}

function AppNumberList(props)
{
    const numbers = ["숫자리스트 시작",1,2,3,4,5,6,7,"숫자리스트 끝"];

    return(
        <div>
          <h1>Number List</h1>
          <NumberList numbers = {numbers}/>
        </div>
    )
}


export default AppNumberList;