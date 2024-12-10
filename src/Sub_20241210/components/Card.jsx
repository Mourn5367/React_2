import React from "react";
function Card(props)
{
    const {subTitle, price, rating, imageUrl} = props;

    return (
        <div className="card">
            <div className="image-container">
                <img src={imageUrl} alt={subTitle}/>
            </div>
            <div className="text-container">
                <p className="subtitle">{subTitle}</p>
            </div>
        </div>
    )
}

export default Card;