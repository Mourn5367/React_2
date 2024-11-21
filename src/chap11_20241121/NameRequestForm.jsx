import React, {useState} from "react";

function NameRequestForm()
{
    const [details, setDetails] = useState("");
    const [name, setName] = useState('');
    const [fruit, setFruit] = useState("레몬");
    const [file, setFile] = useState('');
    const handleChange = (event)=>
    {
        console.log(event.target.id)

        const{target} = event;

        switch(target.id)
        {
            case "name":
                setName(target.value.toUpperCase());
                break;
            case "details":
                setDetails(target.value);
                break;
            case "fruit":
                setFruit(target.value);
                break;
            case "file":
                setFile(target.value);
                break;
            default:
                break;
        }

        // if (target.id === "details")
        // {
        //     setDetails(target.value);
        // }
        // else if (target.id === "name")
        // {
        //     setName(target.value.toUpperCase())
        // }

    }

    const handleSubmit = (event) =>
    {
        alert(`
        입력한 이름: ${name}
        상세한 내용: ${details}
        선택한 과일: ${fruit}
        선택한 파일: ${file}
        `);
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                이름: <input id="name" type="text" value={name} onChange={handleChange}/>
            </label>
            <br/> <br/>
            <label>
                요청사항:
                <br/><br/>
                <textarea id="details" value={details} onChange={handleChange} placeholder={""}></textarea>
            </label>
            <br/><br/>
            <label>
                좋아하는 과일선택:
                <select id="fruit" value={fruit} onChange={handleChange}>
                    <option>키위</option>
                    <option>유자</option>
                    <option>레몬</option>
                    <option>자몽</option>
                </select>
            </label>
            <br/><br/>
            <label htmlFor="">
                파일 선택:
                <input id = "file" type = "file" value={file} onChange={handleChange}/>
            </label>
            <br/><br/>
            <button type="submit">제출</button>
        </form>
    );


}

export default NameRequestForm