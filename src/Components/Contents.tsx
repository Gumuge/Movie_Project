import React from 'react'
import "./Contents.css";
import About from "./About"
import {
    Link
} from "react-router-dom";

interface MyProps{
    poster:string;
    id:number;
}
function Contents(props: MyProps):JSX.Element {
    return (
        <div className="grid_card" key={props.id}>
            <Link to={{
                pathname:`/movie/detail/${props.id}`
                }}>
            <img 
            src={props.poster}
            ></img>
            </Link>
        </div>
    )
}

export default Contents
