import React, {useEffect, useState} from 'react';
import './MainPage.css';
import {ApiKey, ApiURL, ImageURL} from './Config';
import MainImage from './MainImage';
import axios from 'axios';
import Contents from "./Contents";
import Nav from "./Nav";

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
function MainPage(): JSX.Element {
  const [Movies, setMovies] = useState<Movie[]>([]);
  const [MainMovie, setMainMovie] = useState<Movie>();
  const [current, setcurrent] = useState<number>(0);
  let endpoint = `${ApiURL}movie/popular?api_key=${ApiKey}&language=ko-Korean&page=1`;

  async function getData(endpoint:string){ 
    try {
    //응답 성공
    axios.get(endpoint)
    .then(response => {
    setMovies(response.data.results);
    setMainMovie(response.data.results[0]);
    setcurrent(response.data.page);
    }) 
    } catch (error) {
      //응답 실패
      console.error(error);
    }
  }
  function LoadingNext() {
    endpoint = `${ApiURL}movie/popular?api_key=${ApiKey}&language=ko-Korean&page=${current + 1}`;
    getData(endpoint);
    console.log(`now page = ${current+1}`);
  }
  function LoadingPrev() {
    endpoint = `${ApiURL}movie/popular?api_key=${ApiKey}&language=ko-Korean&page=${current - 1}`;
    getData(endpoint);
    console.log(`now page = ${current-1}`);
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
    getData(endpoint);
  }, [])
  //console.log(Movies);
  //console.log(MainMovie);
  return (
    <div className="MainPage">
      <Nav></Nav>
      {MainMovie &&
        <MainImage 
        image={`${ImageURL}w1280${MainMovie.backdrop_path}`}
        title={MainMovie.original_title}
        desc={MainMovie.overview}
        ></MainImage>
      }
      
      <div className="title">
        <h1>Movies by latest</h1>
        <hr></hr>
      </div>
      <div className="contents">
        {Movies.map((movie) => (
          <Contents 
          poster={`${ImageURL}w500${movie.poster_path}`}
          id={movie.id}
          key={movie.id}
          mode="movie"
          ></Contents>
        ))}
      </div>
      <div className="control">
            <button onClick={LoadingPrev}>previous</button>
            <div className="page">
              {current}
            </div>
            <button onClick={LoadingNext}>next</button>
      </div>
    </div>
  );
}

export default MainPage;
