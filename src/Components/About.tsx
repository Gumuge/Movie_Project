import React, {useEffect, useState} from 'react'
import {ApiKey, ApiURL, ImageURL} from './Config';
import axios from 'axios';
import { RouteComponentProps } from 'react-router-dom';

interface Myprops{
  MovieId:string
}
function About(props:RouteComponentProps<Myprops>):JSX.Element {
  let MovieId = props.match.params.MovieId;
    let endpoint = `${ApiURL}movie/${MovieId}/credits?api_key=${ApiKey}&language=ko-Korean`;
    const [MovieDetails, setMovieDetails] = useState<any>();
    async function getData(endpoint:string){ 
      try {
      //응답 성공
      axios.get(endpoint)
      .then(response => {
        console.log(response);
        setMovieDetails(response);
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
      
        <div>
            detail about {MovieId}
        </div>
    )
}

export default About
