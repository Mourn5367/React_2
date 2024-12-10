import React from 'react';
import './Banner.css';

function Banner({ img, title, descrip, backgroundColor }) {
    return (
        <div
            className="banner-container"
            style={{ background: backgroundColor }} // 개별 배경색 적용
        >
            <div className="text-section">
                <h3 className="banner-title">{title}</h3>
                <p className="banner-description">{descrip}</p>
            </div>
            <div className="image-section">
                <img
                    src={img}
                    alt="배너 이미지"
                    className="banner-image"
                />
            </div>
        </div>
    );
}

export default Banner;