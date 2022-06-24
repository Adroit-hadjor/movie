import { useCallback, useEffect, useState } from "react";
import { Get } from "../api/movie_api";

function useMovie(page) {
    
    const [movies, setMovies] = useState([]);
    const [trending, setTrending] = useState([]);
    const movieImgURL = "https://image.tmdb.org/t/p/w500/"
 
 
  

  const getMovies = useCallback(async () => {
      const url = `discover/movie?page=${page}`
       const res = await Get(url)
       setMovies(res)
  }, [page]);
  const getTrending = useCallback(async () => {
    const url = "trending/movie/day?page=1"
     const res = await Get(url)
     setTrending(res)
}, []);

  
  
 

  useEffect(() => {
    getMovies();
    console.log("nums",page)
  }, [page]);

  useEffect(() => {
    getTrending();
  }, [getTrending]);
 



  return {
    movies,
    movieImgURL,
    trending,
  
  };
}

export default useMovie;