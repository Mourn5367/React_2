import React from "react";
import CardContainer from "./CardContainer";
import BannerContainer from "./BannerContainer";
import Side from "./Side";
import "./MainContentContainer.css";

function MainContentContainer() {
    return (
        <div className="main-content-container">
            {/* 왼쪽: CardContainer */}
            <div className="left-column">
                <CardContainer />
            </div>
            {/* 오른쪽: BannerContainer 위, Side 아래 */}
            <div className="right-column">
                <div className="top-right">
                    <BannerContainer />
                </div>
                <div className="bottom-right">
                    <Side />
                </div>
            </div>
        </div>
    );
}

export default MainContentContainer;
