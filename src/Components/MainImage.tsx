import { url } from 'inspector';
import React from 'react'
import "./MainImage.css";

interface MyProps{
    image:string;
    title:string;
    desc:string;
}

function MainImage(props:MyProps):JSX.Element {
    return (
        <div className="background" style={{backgroundImage:`url(${props.image})`}}>
            <div className="MainDesc">
                <h2>{props.title}</h2>
                <div className="desc">
                    {props.desc}
                </div>
            </div>
            
        </div>
    )
}

export default MainImage
