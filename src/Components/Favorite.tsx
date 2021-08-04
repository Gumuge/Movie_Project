import React, {useEffect, useState} from 'react'
import axios from "axios";
import "./Favorite.css";

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
            {fav.map((item) => (
                <div key={item.id}>
                <h1>{item.id}</h1>
                <h1>{item.title}</h1>
                <h1>{item.desc}</h1>
                <button onClick={() => del(item.id)}>Delete</button>
                </div>  
            ))}
        </div>
    )
}

export default Favorite
