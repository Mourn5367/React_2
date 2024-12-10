import { useEffect, useState } from "react";
import season5 from "../images/Season 5_PC.png";
import Line from "../images/Line.png";
import "./ImageCarouesl.css";

function ImageCarousel() {
    const images = [season5, Line];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isSliding, setIsSliding] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isSliding) {
                goToNext(true); // 자동 전환의 경우 true로 플래그를 전달
            }
        }, 3000);

        return () => clearInterval(interval);
    }, [isSliding]);

    const goToNext = (isAuto = false) => {
        if (!isAuto && isSliding) return; // 버튼 클릭 시 전환 중 방지
        setIsSliding(true);
        setTimeout(() => setIsSliding(false), 1000); // 애니메이션 지속 시간
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const goToPrevious = () => {
        if (isSliding) return;
        setIsSliding(true);
        setTimeout(() => setIsSliding(false), 1000);
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const goToImage = (index) => {
        if (isSliding || currentIndex === index) return;
        setIsSliding(true);
        setTimeout(() => setIsSliding(false), 1000);
        setCurrentIndex(index);
    };

    return (
        <div className="image-carousel">
            <div
                className="carousel-container"
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                    transition: "transform 1s ease-in-out",
                    display: "flex",
                }}
            >
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Slide ${index + 1}`}
                        className="carousel-image"
                    />
                ))}
            </div>

            <div className="overlay">
                {currentIndex === 0 ? (
                    <>
                        <h2>이터널 리턴 시즌 6 LEGION 시즌 시작 !</h2>
                        <h3>새로운 스킨과 VLS, 비밀 연구소 시스템이 추가되었습니다</h3>
                    </>
                ) : (
                    <>
                        <h2>이터널 리턴 LINE 이모티콘 판매개시 !</h2>
                        <h3>귀여운 이모티콘으로 나를 표현하고, LINE에서 즐거운 대화를 만들어보세요!</h3>
                    </>
                )}
            </div>

            <div className="button-container">
                <button className="carousel-button" onClick={() => goToImage(0)}>
                    이터널 리턴 시즌 6 시작
                </button>
                <button className="carousel-button" onClick={() => goToImage(1)}>
                    LINE 이모티콘 판매 개시
                </button>
            </div>
        </div>
    );
}

export default ImageCarousel;
