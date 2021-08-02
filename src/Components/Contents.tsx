import React from 'react'
import "./Contents.css";
import About from "./About"
import {
    Link
} from "react-router-dom";
import none from "../noneprofile.png";

interface MyProps{
    poster?:string;
    id:number;
    mode:string;
    actorImage?:string;
    name?:string;
    character?:string;
}
function Contents(props: MyProps):JSX.Element {
    if(props.mode === "movie"){
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
    else{
        return (
            <div className="grid_card" key={props.id}>
                <img 
                src={props.actorImage}
                ></img>
                <p>Actor Name : {props.name}</p>
                <p>Character : {props.character}</p>
            </div>
        )
    }
    
}

export default Contents
