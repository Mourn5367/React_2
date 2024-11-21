import React, {useState} from "react";
import "./SignUp.css"
function SignUp()
{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [gender, setGender] = useState("남자");
    const [interests, setInterests] = useState("");

    const handleSubmit = (event) =>
    {
        alert(`
        입력한 이름:\t${name}
        이메일:\t${email}
        비밀번호:\t${password}
        선택한 성별:\t${gender}
        관심사:\t${interests}
        `);
        event.preventDefault();
    };
    const handleChange = (event)=>
    {
        const{target} = event;

        switch(target.id)
        {
            case "name":
                setName(target.value.toUpperCase());
                break;
            case "email":
                setEmail(target.value);
                break;
            case "password":
                setPassword(target.value);
                break;
            case "gender":
                setGender(target.value);
                break;
            case "interests":
                setInterests(target.value);
                break;
            default:
                break;
        }

    }
    return (
        <div className = "signup-container">
            <h2>회원가입</h2>
            <form onSubmit={handleSubmit} className="signup-form">
                <label>
                    이름:
                    <input
                        id="name"
                        type= "text"
                        value={name}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    이메일:
                    <input
                        id="email"
                        type= "email"
                        value={email}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    비밀번호:
                    <input
                        id="password"
                        type= "password"
                        value={password}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    성별:
                    <select
                        id= "gender"
                        value={gender}
                        onChange={handleChange}
                        required
                    >
                        <option value="남자">남자</option>
                        <option value="여자">여자</option>
                        <option value="기타">기타</option>
                    </select>
                </label>
                <label>
                    관심사:
                    <textarea
                        id="interests"
                        type= "text"
                        value={interests}
                        onChange={handleChange}
                        placeholder= "관심사를 입력하시오."
                        required
                    />
                </label>
                <button type="submit">가입하기</button>
            </form>
        </div>

    )
}

export default SignUp;