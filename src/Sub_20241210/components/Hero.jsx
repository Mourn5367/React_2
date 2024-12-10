import React from 'react';
import bgImage from '../images/animal.jpg'

function Hero()
{
    return(
        <div className="hero" style={{backgroundImage: `url(${bgImage})`}}>
            <div style={{fontSize: '56px' ,textShadow: '4px 4px 0px white'}} >
                예약</div>
            <div style={{fontSize: '56px' , textShadow: '4px 4px 0px white'}}>
                하세요</div>
        </div>
    )
}

export default Hero;