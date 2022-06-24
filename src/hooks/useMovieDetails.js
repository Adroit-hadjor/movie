import { useCallback, useEffect, useState } from "react";
import { Get } from "../api/movie_api";

function useMovieDetails(id,page) {
    
    const [movie, setMovies] = useState([]);
    const movieImgURL = "https://image.tmdb.org/t/p/w500/"
 
  

  const getMovies = useCallback(async () => {
      const url = `movie/${id}?page=1`
       const res = await Get(url)
       console.log("movies",res)
       setMovies(res)
  }, []);

  
  
 

  useEffect(() => {
    getMovies();
  }, [getMovies]);
 
 



  return {
    movie,
    movieImgURL,
  };
}

export default useMovieDetails;