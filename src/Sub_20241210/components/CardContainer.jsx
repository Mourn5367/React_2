import React from "react";

import img1 from '../images/img-lol.jpg'
import img2 from '../images/img-tft.jpg'
import img3 from '../images/img-valorant.jpg'
import img5 from '../images/img-maplestory.jpg'
import img4 from '../images/img-er.jpg'
import img6 from '../images/img-pubg.jpg'
import img7 from '../images/img-deadlock.jpg'
import img8 from '../images/img-genshinimpact.jpg'
import img9 from '../images/img-lvup.jpg'
import img10 from '../images/img-gca.jpg'
import img11 from '../images/img-gcl.jpg'
import img12 from '../images/img-lostark.jpg'
import Card from "./Card";



function CardContainer()
{
    const listings = [
        {
            id:1,
            subTitle: "리그 오브 레전드",
            imageUrl : `${img1}`
        },
        {
            id:2,
            subTitle: "전략적 팀 전투",
            imageUrl : `${img2}`
        },
        {
            id:3,
            subTitle: "발로란트",
            imageUrl : `${img3}`
        },
        {
            id:4,
            subTitle: "이터널 리턴",
            imageUrl : `${img4}`
        },
        {
            id:5,
            subTitle: "메이플스토리",
            imageUrl : `${img5}`
        },
        {
            id:6,
            subTitle: "배틀그라운드",
            imageUrl : `${img6}`
        },
        {
            id:7,
            subTitle: "데드락",
            imageUrl : `${img7}`
        },
        {
            id:8,
            subTitle: "원신",
            imageUrl : `${img8}`
        },
        {
            id:9,
            subTitle: "레벨업지지",
            imageUrl : `${img9}`
        },
        {
            id:10,
            subTitle: "게임코치 아카데미",
            imageUrl : `${img10}`
        },
        {
            id:11,
            subTitle: "GCL",
            imageUrl : `${img11}`
        },
        {
            id:12,
            subTitle: "로스트아크",
            imageUrl : `${img12}`
        },
    ]
    return(
        <div className={"card-container"}>
            {listings.map(listing => (
                    <Card key = {listing.id} {...listing}/>

                //  ... 의미: 나머지 값들을 전달하겠다
                ))}
        </div>
    );
}

export default CardContainer;