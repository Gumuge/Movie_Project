import React, {useEffect, useState} from 'react';
import './App.css';
import {ApiKey, ApiURL, ImageURL} from './Config';
//import Test from "../Test";
import axios from 'axios';

function App() {
  const [Movies, setMovies] = useState([]);
  const [MainMovie, setMainMovie] = useState([]);

  async function getData() { 
    try {
    //응답 성공
    const endpoint = `${ApiURL}movie/popular?api_key=${ApiKey}&language=ko-Korean&page=1`;
    axios.get(endpoint)
    .then(response => {
    setMovies(response.data.results);
    setMainMovie(response.data.results[0]);
    }) 
    } catch (error) {
      //응답 실패
      console.error(error);
    }
  }

  useEffect(() => {
    // const endpoint = `${ApiURL}movie/popular?api_key=${ApiKey}&language=en-US&page=1`;
    // fetch(endpoint)
    // .then(response => response.json())
    // .then(response => {
    //   setMovies([response.results]);
    //   setMainMovie(response.results[0]);
    // })
    // axios.get(endpoint)
    // .then(response => {
    //   setMovies(response.data.results);
    //   setMainMovie(response.data.results[0]);
    //   console.log(response.data.results);
    // })
    getData();
  }, [])
  console.log(Movies);
  console.log(MainMovie);
  return (
    <div>
      <div className="title">
        <h1>Movies by latest</h1>
      </div>
      <hr></hr>
      <div className="contents">
         <h1>{MainMovie.title}</h1>     
      </div>
    </div>
  );
}

export default App;
