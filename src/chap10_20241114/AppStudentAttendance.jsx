import React from "react";
import StudentAttendance from "./StudentAttendance";

const students1 = [
    {
        id: 1,
        name: "김창섭",
        grade: 1,
        major: "국문학과",
        emoji: "👨‍✈️",
    },
    {
        id: 2,
        name: "신창섭",
        grade: 1,
        major: "신학",
        emoji: "🧚‍♂️"
    },
    {
        id: 3,
        name: "박지수",
        grade: 1,
        major: "인공지능소프트웨어",
    },
    {
        id: 4,
        name: "바람",
        grade: 1,
        major: "기상학과",
    },
    {
        id: 5,
        name: "단풍",
        grade: 1,
        major: "지능형농업학과",
    },
];
const students2 = [
    {
        id: 1,
        name: "김창",
        grade: 1,
        major: "국문학과",
        emoji: "👨‍✈️",
    },
    {
        id: 2,
        name: "신창",
        grade: 1,
        major: "신학",
        emoji: "🧚‍♂️"
    },
    {
        id: 3,
        name: "박지",
        grade: 1,
        major: "인공지능소프트웨어",
        emoji: "👨‍🎓"
    },
    {
        id: 4,
        name: "바",
        grade: 1,
        major: "기상학과",
        emoji: "💨"
    },
    {
        id: 5,
        name: "단",
        grade: 1,
        major: "지능형농업학과",
        emoji: "🍚"
    },
];
function AppStudentAttendance()
{

    return(
        <div>
            <StudentAttendance students = {students1} />
            <StudentAttendance students = {students2} />
            {/*<StudentAttendance students = {[students1,students2]} />*/}
        </div>
    )
}

export default AppStudentAttendance;