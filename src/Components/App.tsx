import React, {useEffect, useState} from 'react';
import './App.css';
import {ApiKey, ApiURL, ImageURL} from './Config';
import MainImage from './MainImage';
import axios from 'axios';
import Contents from "./Contents";

interface Movie{
  adult: false
  backdrop_path: string;
  genre_ids: Array<number>;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
//function App(props : Movie): JSX.Element 
function App(): JSX.Element {
  const [Movies, setMovies] = useState<Movie[]>([]);
  const [MainMovie, setMainMovie] = useState<Movie>();

  async function getData(){ 
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
    <div className="MainPage">

      {MainMovie &&
        <MainImage 
        image={`${ImageURL}w1280${MainMovie?.backdrop_path}`}
        title={MainMovie.original_title}
        desc={MainMovie.overview}
        ></MainImage>
      }
      
      <div className="title">
        <h1>Movies by latest</h1>
        <hr></hr>
        {Movies.map((movie) => (
          <img src={`${ImageURL}w1280${movie.backdrop_path}`}></img>
        ))}
      </div>
      
      
    </div>
  );
}

export default App;
