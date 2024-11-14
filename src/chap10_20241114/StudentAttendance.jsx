import React from "react";


// const students = [
//     {
//         id: 1,
//         name: "김창섭",
//         grade: 1,
//         major: "국문학과",
//         emoji: "👨‍✈️",
//     },
//     {
//         id: 2,
//         name: "신창섭",
//         grade: 1,
//         major: "신학",
//         emoji: "🧚‍♂️"
//     },
//     {
//         id: 3,
//         name: "박지수",
//         grade: 1,
//         major: "인공지능소프트웨어",
//     },
//     {
//         id: 4,
//         name: "바람",
//         grade: 1,
//         major: "기상학과",
//     },
//     {
//         id: 5,
//         name: "단풍",
//         grade: 1,
//         major: "지능형농업학과",
//     },
// ];

function StudentAttendance(props)
{
    return(
        <div>
            <h1>학생 출석부</h1>
            <ul>
                {
                     students.map((student) =>
                         (
                             <li key = {student.id}>
                                 <b>{student.name}</b> - {student.grade}학년, {student.major}전공, {student.emoji}
                             </li>
                         )
                     )
                }
            </ul>
        </div>
    )
    
}

export default StudentAttendance;