import React from "react";
import Banner from "./Banner";
import img1 from "../images/KajyaSee.png"
import img2 from "../images/muchiStart.png"

function BannerContainer() {
    const bannerData = [
        {
            img: img1,
            title: "내 전적을 한눈에!",
            descrip: "나만의 닥지지 카드를 만들어보세요!",
            backgroundColor: "linear-gradient(90deg, #FF6600, #FF9999)",
        },
        {
            img: img2,
            title: "이터널리턴 시즌 6 LEGION 출시",
            descrip: "지금 바로 시작해!",
            backgroundColor: "linear-gradient(90deg, #0066FF, #99CCFF)",
        },
    ];

    return (
        <div className="banner-container-wrapper">
            {bannerData.map((banner, index) => (
                <Banner
                    key={index}
                    img={banner.img}
                    title={banner.title}
                    descrip={banner.descrip}
                    backgroundColor={banner.backgroundColor}
                />
            ))}
        </div>
    );
}

export default BannerContainer;