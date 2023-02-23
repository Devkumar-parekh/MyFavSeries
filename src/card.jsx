import React from 'react';

function Card(props){
    return(
        <>
            <div className='card' id={props.link}>
                <div className='card-img-wrap'>
                    <img className='card-img' src={props.imgsrc} alt='img'/>
                </div>
                <div className='card-content'>
                    <h2 className='card-ttl'>{props.title}</h2>
                    <p className='card-des'>{props.descr}</p>
                    <div className='card-link'>
                        <a href={`#${props.link}`}>Check It</a>
                    </div>
                    
                </div>
            </div>
        </>
    );
}

export default Card;