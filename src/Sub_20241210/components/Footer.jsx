import React, { useState } from 'react';
import './Footer.css';

function Footer() {
    const [showBusinessInfo, setShowBusinessInfo] = useState(false);

    const toggleBusinessInfo = () => {
        setShowBusinessInfo(!showBusinessInfo);  // 클릭 시 상태를 반전시켜 정보 표시/숨기기
    };

    return (
        <div className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <h2>DAK.GG</h2>
                </div>
                <div className="footer-links">
                    {/* 사업자 정보 클릭 시 정보 토글 */}
                    <a onClick={toggleBusinessInfo} className="business-info-link">
                        (주)플레이엑스피 사업자 정보
                        {showBusinessInfo ? ' ^' : ' V'}
                    </a>
                    {showBusinessInfo && (
                        <p className="business-info">
                            대표: 윤석재 | 사업자 등록 번호: 406-86-00726 | 서울특별시 종로구 새문안로 82, 19층 (신문로1가, 에스타워) | 070-7713-0705
                        </p>
                    )}
                    <br /><br />
                    <a href="#">서비스 이용 약관</a>
                    <a href="#">개인정보 취급 방침</a>
                    <a href="#">제휴 문의</a>
                    <a href="#">고객 센터</a>
                    <a href="#">채용</a>
                </div>
                <p>© DAK.GG All Rights Reserved.</p>
            </div>
        </div>
    );
}

export default Footer;