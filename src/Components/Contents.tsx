import React from 'react'
import "./Contents.css";

interface MyProps{
    poster:string;
    id:number;
}
function Contents(props: MyProps):JSX.Element {
    return (
        <div className="grid_card" key={props.id}>
            <img 
            src={props.poster}
            ></img>
        </div>
    )
}

export default Contents
