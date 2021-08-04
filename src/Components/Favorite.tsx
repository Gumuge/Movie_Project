import React, {useEffect, useState} from 'react'
import axios from "axios";
import "./Favorite.css";
import Nav from "./Nav";

interface Data{
    id:number;
    title:string;
    desc:string;
}
function Favorite():JSX.Element {
    const [fav, setfav] = useState<Data[]>([]);

    useEffect(() => {
        axios.get("http://localhost:3001/favorite/")
        .then(response => {
            console.log(response.data); 
            setfav(response.data);
        })
    }, [])

    function del(id:number) {
        if(window.confirm("DELETE?")){
            axios.delete(`http://localhost:3001/favorite/${id}`)
            .then(response => {
                console.log(response);
            })
        }
    }
    return (
        <div>
            <Nav></Nav>
            {fav.map((item) => (
                <div key={item.id}>
                    <table>
                        <tr>
                            <th>ID</th><td>{item.id}</td>
                        </tr>
                        <tr>
                            <th>Title</th><td>{item.title}</td>
                        </tr>
                        <tr>
                            <th>Desc</th><td>{item.desc}</td>
                        </tr>
                    </table>
                    <br></br>
                <button onClick={() => del(item.id)}>Delete</button>
                </div>  
            ))}
        </div>
    )
}

export default Favorite
