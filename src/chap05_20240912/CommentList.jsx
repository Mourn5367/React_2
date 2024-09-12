import React from "react";
import {Comment} from "./Comment";



const comments = [
    {
        name: "MineCraft Version : 1.16",
        comment: "마인크래프트 1.16 립버전 다운로드",
        linkText: "https://ko.wikipedia.org/wiki/%EB%82%98%EC%9D%98_%ED%88%AC%EC%9F%81",
        imageUrl: "https://cdn2.steamgriddb.com/icon_thumb/986648642d1a68a3178f6869689cc260.png"
    },
    {
        name: "Eternal Return",
        comment: "이터널 리턴 시즌 5 OPEN 지금 바로 시작해",
        imageUrl: "../image/Kajya.png"
    },
    {
        name: "신 창 섭",
        comment: "리부트 정상화",
        linkText: "https://www.youtube.com/watch?v=6HCZNBEfnao",
        imageUrl: "https://mod-file.dn.nexoncdn.co.kr/profile/717/1724422242502.png"
    },
]

function CommentList(props)
{
    return(
        <div>
            {
                comments.map((comment) => {
                    return(
                        <Comment name = {comment.name}
                                 comment = {comment.comment}
                                 link = {comment.linkText}
                                 imageUrl = {comment.imageUrl}/>
                    );
                })
            }

            {/*<Comment name = {"Eternal Return"} comment = {"시즌 5 OPEN"}/>*/}
            {/*<Comment name = {"이 편지는 영국으로 부터"} comment = {"...[더보기]"}/>*/}
        </div>
    );
}

export {CommentList}