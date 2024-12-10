import React from "react";
import "./Dak.css"
import Header from "./components/Header";
import CardContainer from "./components/CardContainer";
import img1 from "./images/KajyaNope.png";
import img2 from "./images/KajyaWin.png";
import img3 from "./images/KajyaScore10.png";
import img4 from "./images/KajyaSee.png";
import Footer from "./components/Footer";
import ImageCarouesl from "./components/ImageCarouesl";
import BannerContainer from "./components/BannerContainer";
import Side from "./components/Side";
import MainContentContainer from "./components/MainContentContainer";
function Dak()
{

    return (
        <div className="App">
            <Header />
            <ImageCarouesl />
            <MainContentContainer/>
            <Footer />
        </div>
    );
}

export default Dak;