import { useCallback, useEffect, useState } from "react";
import { GetDetails } from "../api/anime_api";

function useAnimeDetails(id) {
    
    const [anime, setAnime] = useState([]);
 
  

  const getAnime = useCallback(async () => {
      const url = `${id}?`
       const res = await GetDetails(url)
       //console.log("dat",res.data)
       setAnime(res.data)
  }, []);

  
  
 

  useEffect(() => {
    getAnime();
  }, [getAnime]);
 
 



  return {
    anime,
  
  };
}

export default useAnimeDetails;