import React, {useEffect, useState} from 'react'
import axios from "axios";
import "./Favorite.css";
import Nav from "./Nav";
import {MyApi, HerokuApi, ImageURL} from "./Config";
import { getJSDocDeprecatedTag } from 'typescript';

interface Data{
    id:number;
    title:string;
    desc:string;
    poster:string;
}
function Favorite():JSX.Element {
    const [fav, setfav] = useState<Data[]>([]);

    async function getData(){
        await axios.get(`${HerokuApi}/favorite/`)
        .then(response => {
            console.log(response.data); 
            setfav(response.data);
        })
    }
    useEffect(() => {
        getData();
    }, [])

    function del(id:number) {
        if(window.confirm("DELETE?")){
            axios.delete(`${HerokuApi}/favorite/${id}`)
            .then(response => {
                console.log(response);
                getData();
            })
        }
    }
    return (
        <div>
            <Nav></Nav>
            {fav ? fav.map((item) => (
                <div key={item.id} className="fav">
                    <table>
                        <tr>
                            <td rowSpan={4}><img src={`${ImageURL}w500${item.poster}`}></img></td>
                        </tr>
                        <tr>
                            <th>ID</th><td>{item.id}</td>
                        </tr>
                        <tr>
                            <th>Title</th><td>{item.title}</td>
                        </tr>
                        <tr>
                            <th>Desc</th><td>{item.desc}</td>
                        </tr>
                        <tr>
                        <td><button onClick={() => del(item.id)}>Remove</button></td>
                        </tr>
                    </table>
                </div>  
            )) : 
            <div><p>Nothing</p></div>}
        </div>
    )
}

export default Favorite
