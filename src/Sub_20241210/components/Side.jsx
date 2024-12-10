import React from "react";
import './Side.css'


function Side(props)
{

    const menuItems = [
        { name: '이터널 리턴 - 시즌5 성적표 출시!', date: new Date("2024-12-05") },
        { name: '롤체지지 - 가이드 및 통계 개편 안내', date: new Date("2024-12-04") },
        { name: '이터널 리턴 - 시즌4 성적표 출시', date: new Date("2024-08-29") },
        { name: '닥지지 - 데스크톱 앱 출시', date: new Date("2024-07-30") },
        { name: '롤체지지 - TFT 시즌 11 성적표 오픈 !', date: new Date("2024-07-29") },
    ];

    function formatting(date)
    {
        const year = date.getFullYear(); // 연도
        const month = String(date.getMonth() + 1).padStart(2, "0"); // 월 (0부터 시작하므로 1을 더해줌)
        const day = String(date.getDate()).padStart(2, "0"); // 일
        return `${year}-${month}-${day}`;
    }

    const info =
            {
                cafeName: "최신소식"
            }

    return (
        <aside className="sidebar1">
            <div className="cafe-info1">
                <h3 className="cafe-name1">{info["cafeName"]}</h3>
            </div>
            <ul className="menu-list1">
                {menuItems.map((item, index) => (
                    <li className="li-with-border" key={index}>
                        {item.name} <span>{formatting(item.date)}</span>
                    </li>
                ))}
            </ul>
        </aside>
    );
}

export default Side;