import { useCallback, useEffect, useState } from "react";
import { Get } from "../api/anime_api";

function useAnimes(page) {
    
    const [animes, setAnimes] = useState([]);
 
  

  const getAnimes = useCallback(async () => {
      const url = `?page[offset]=${(page*18)-17}`
       const res = await Get(url)
       setAnimes(res.data)
  }, [page]);

  
  
 

  useEffect(() => {
    getAnimes();
  }, [getAnimes]);
 
 



  return {
    animes,
  
  };
}

export default useAnimes;