import React from 'react'
import {
    Link
  } from "react-router-dom";
import "./Nav.css";
import icon from "../movie_icon.jpg";
function Nav() {
    return (
        <div className="nav">
            <img src={icon} className="icon"></img>
            <Link to={{
            pathname:"/"
            }}>
            <button>Home</button>
            </Link>
            <Link to={{
            pathname:"/favorite"
            }}>
            <button>Favoirte</button>
            </Link>
        </div>
    )
}

export default Nav
