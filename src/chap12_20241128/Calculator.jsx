import React, {useState} from "react";
import BoilingVerdict from "./BoilingVerdict";

function Calculator(props)
{
    const [temperature, setTemperature] = useState();

    const handleChange = (event) =>
    {
        setTemperature(event.target.value);
    }

    return(
        <fieldset>
            <legend>섭씨 온도를 입력하시오.</legend>
            <input type="text" value={temperature} onChange={handleChange}/>
            <BoilingVerdict celius = {parseFloat(temperature)}/>
        </fieldset>
    )

}

export default Calculator;