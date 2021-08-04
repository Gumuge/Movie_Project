import React, {useEffect, useState} from 'react'
import {ApiKey, ApiURL, ImageURL} from './Config';
import axios from 'axios';
import { RouteComponentProps } from 'react-router-dom';
import MainImage from './MainImage';
import "./About.css";
import Contents from "./Contents";
import none from "../noneprofile.png";
import Nav from "./Nav";

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
interface Actor{
  adult: boolean;
  cast_id: number;
  character: string;
  credit_id: string;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  order: number;
  original_name: string;
  popularity: number;
  profile_path: string;
}
function About(props:RouteComponentProps<Myprops>):JSX.Element {
    let MovieId = props.match.params.MovieId;
    let Creditendpoint = `${ApiURL}movie/${MovieId}/credits?api_key=${ApiKey}&language=ko-Korean`;
    let endpoint = `${ApiURL}movie/${MovieId}?api_key=${ApiKey}&language=ko-Korean`;
    const [MovieDetails, setMovieDetails] = useState<Movie>();
    const [Actors, setActors] = useState<Actor[]>([]);
    const [IsShow, setIsShow] = useState<boolean>(false);
    async function getData(endpoint:string, Creditendpoint:string){ 
      try {
      //응답 성공
      //favorite의 정보를 받아옴
      //영화 정보를 받아옴
      axios.get(endpoint)
      .then(response => {
        console.log(response);
        setMovieDetails(response.data);
      }) 
      //crew의 정보를 받아옴
      axios.get(Creditendpoint)
      .then(response => {
        console.log(response.data);
        setActors(response.data.cast);
        
      })
      } catch (error) {
        //응답 실패
        console.error(error);
      }
    }
    useEffect(() => {
      getData(endpoint, Creditendpoint);
      
    }, [])
    function ViewActive() {
      setIsShow(!IsShow);
    }
    function add() {
      axios.post("https://gumuge-movie-project.herokuapp.com/api/favorite", {
          id:MovieDetails?.id,
          title:MovieDetails?.title,
          desc:MovieDetails?.overview
      })
    }
    console.log(MovieDetails);
    console.log(props);
    return (
      <div>
        <Nav></Nav>
        <div className="Info">
          {MovieDetails &&
          <MainImage 
          image={`${ImageURL}w1280${MovieDetails.backdrop_path}`}
          title={MovieDetails.original_title}
          desc={MovieDetails.overview}
          ></MainImage>
          }
          <div className="InfoTitle"> 
            Movie Info <button className="fav" onClick={add}>Favorite</button>
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
          <div className="InfoTitle"> 
            Actros Info
          </div>
          
          <div>
            <button onClick={ViewActive}>View</button>
          </div>
          {IsShow &&
          <div className="contents">
          {Actors.map((actor) => (
          <Contents 
          actorImage={
            actor.profile_path ? `${ImageURL}w500${actor.profile_path}` : none}
          id={actor.id}
          name={actor.name}
          mode="actor"
          character={actor.character}
          ></Contents>
        ))}
          </div>
        }
        </div>
      </div>
    )
}

export default About
