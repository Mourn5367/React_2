import React from "react";
import "../Dak.css"

function Header() {
    return (
        <header className="header">
            <div className="header-top">
                <div className="logo">DAK.GG</div>
                <a href="/">전적검색</a>
            </div>
            <div className="header-middle">
            </div>
            <nav className="nav-secondary">
                <a href="/settings">메인</a>
                <a href="/settings">닥지지 카드</a>
            </nav>
        </header>
    );
}

export default Header;