import React, {useState} from "react";

function RequestForm()
{
    const [details, setDetails] = useState("");

    const handleSubmit = (event) =>
    {
        event.preventDefault();
        alert(`상세 입력사항: ${details}`);
        setDetails("");
    }

    const handleChange = (event) =>
    {
        setDetails(event.target.value);
    }
    return(
        <form onSubmit = {handleSubmit}>
            <label>
                요청사항:
                <textarea value = {details} onChange={handleChange}  placeholder={""}></textarea>
            </label>

            <button type="submit">제출</button>
        </form>
    );

}

export default RequestForm;