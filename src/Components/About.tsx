import React, {useEffect, useState} from 'react'
import {ApiKey, ApiURL, ImageURL} from './Config';
import axios from 'axios';
import { RouteComponentProps } from 'react-router-dom';
import MainImage from './MainImage';
import "./About.css";

interface Myprops{
  MovieId:string
}
interface Movie{
  adult: false
  backdrop_path: string;
  genres: Array<Object>;
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
  status:string;
  runtime:number;
}
function About(props:RouteComponentProps<Myprops>):JSX.Element {
    let MovieId = props.match.params.MovieId;
    //let endpoint = `${ApiURL}movie/${MovieId}/credits?api_key=${ApiKey}&language=ko-Korean`;
    let endpoint = `${ApiURL}movie/${MovieId}?api_key=${ApiKey}&language=ko-Korean`;
    const [MovieDetails, setMovieDetails] = useState<Movie>();
    async function getData(endpoint:string){ 
      try {
      //응답 성공
      axios.get(endpoint)
      .then(response => {
        console.log(response);
        setMovieDetails(response.data);
      }) 
      } catch (error) {
        //응답 실패
        console.error(error);
      }
    }
    useEffect(() => {
      getData(endpoint);
      
    }, [])
    console.log(MovieDetails);
    console.log(props);
    return (
        <div className="Info">
          {MovieDetails &&
          <MainImage 
          image={`${ImageURL}w1280${MovieDetails.backdrop_path}`}
          title={MovieDetails.original_title}
          desc={MovieDetails.overview}
          ></MainImage>
          }
          <div className="InfoTitle"> 
            Movie Info
            
          </div>
          <div>
            <table>
              <tr>
                <th>Title</th><td>{MovieDetails?.title}</td>
                <th>Popularity</th><td>{MovieDetails?.popularity}</td>
                <th>Running Time</th><td>{MovieDetails?.runtime}min</td>
              </tr>
              <tr>
                
              </tr>
              <tr>
                <th>Release Date</th><td>{MovieDetails?.release_date}</td>
                <th>Status</th><td colSpan={3}>{MovieDetails?.status}</td>
              </tr>
              <tr>
                <th>Vote Average</th><td>{MovieDetails?.vote_average}</td>
                <th>Vote Count</th><td colSpan={3}>{MovieDetails?.vote_count}</td>
              </tr>
            </table>
          </div>
        </div>
    )
}

export default About
