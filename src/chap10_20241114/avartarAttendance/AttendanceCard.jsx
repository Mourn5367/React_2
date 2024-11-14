import React from "react";
import './AttendanceCard2.css'
import img1 from './img/다운로드.jfif'
const students = [
    {
        id: 1,
        name: "A",
        grade: 1,
        major: "국문학과",
        emoji: "👨‍✈️",
        avatar: "https://randomuser.me/api/portraits/lego/7.jpg"
    },
    {
        id: 2,
        name: "B",
        grade: 1,
        major: "신학",
        emoji: "🧚‍♂️",
        avatar: "https://randomuser.me/api/portraits/lego/8.jpg"
    },
    {
        id: 3,
        name: "C",
        grade: 1,
        major: "인공지능소프트웨어",
        emoji: "👨‍🎓",
        avatar: "https://randomuser.me/api/portraits/lego/9.jpg"
    },
    {
        id: 4,
        name: "D",
        grade: 1,
        major: "기상학과",
        emoji: "💨",
        avatar: "https://randomuser.me/api/portraits/lego/6.jpg"
    },
    {
        id: 5,
        name: "E",
        grade: 1,
        major: "지능",
        emoji: "🍚",
        avatar: "https://randomuser.me/api/portraits/lego/5.jpg"
    },
    {
        id: 6,
        name: "E",
        grade: 1,
        major: "지능형농업학과",
        emoji: "🍚",
        avatar: "https://randomuser.me/api/portraits/lego/4.jpg"
    },
    {
        id: 7,
        name: "E",
        grade: 1,
        major: "지능형농업학과",
        emoji: "🍚",
        avatar: "https://randomuser.me/api/portraits/lego/3.jpg"
    },
    {
        id: 8,
        name: "T",
        grade: 1,
        major: "학",
        emoji: "🍚",
        avatar: "https://randomuser.me/api/portraits/lego/2.jpg"
    },
    {
        id: 9,
        name: "J",
        grade: 1,
        major: "학",
        emoji: "🍚",
        avatar: "https://randomuser.me/api/portraits/lego/1.jpg"
    },
    {
        id: 10,
        name: "냐오하",
        grade: 1,
        major: "츄르학과",
        emoji: "😺",
        avatar: img1
    },
];

function AttendanceCard(props)
{
    return(
        <div className="attendance-container">
           <h2 className = "attendance-title" >학생 사진 출석부</h2>
            <div className= "card-container">
                {
                    students.map((student) =>(
                        <div className = "student-card">
                            <img className="student-avatar" src={student.avatar} alt={student.name+"의 이미지"}/>
                            <div className= "student-info">
                                <h3>{student.name}</h3>
                                <p>{student.grade}학년 | {student.major}전공 | {student.emoji}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default AttendanceCard;

